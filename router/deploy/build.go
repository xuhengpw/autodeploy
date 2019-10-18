// Copyright 2019 syncd Author. All Rights Reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

package deploy

import (
	"github.com/dreamans/syncd"
	buiTask "github.com/dreamans/syncd/build"
	"github.com/dreamans/syncd/module/deploy"
	"github.com/dreamans/syncd/module/project"
	"github.com/dreamans/syncd/render"
	"github.com/dreamans/syncd/router/common"
	"github.com/dreamans/syncd/util/command"
	"github.com/dreamans/syncd/util/gostring"
	"github.com/gin-gonic/gin"
)

func BuildStop(c *gin.Context) {
	id := gostring.Str2Int(c.PostForm("id"))
	if id == 0 {
		render.ParamError(c, "id cannot be empty")
		return
	}
	apply := &deploy.Apply{
		ID: id,
	}
	if err := apply.Detail(); err != nil {
		render.AppError(c, err.Error())
		return
	}
	m := &project.Member{
		UserId:  c.GetInt("user_id"),
		SpaceId: apply.SpaceId,
	}
	if in := m.MemberInSpace(); !in {
		render.CustomerError(c, render.CODE_ERR_NO_PRIV, "user is not in the project space")
		return
	}
	buiTask.StopTask(id)
	render.JSON(c, nil)
}

func BuildStatus(c *gin.Context) {
	id := gostring.Str2Int(c.Query("id"))
	if id == 0 {
		render.ParamError(c, "id cannot be empty")
		return
	}
	apply := &deploy.Apply{
		ID: id,
	}
	if err := apply.Detail(); err != nil {
		render.AppError(c, err.Error())
		return
	}
	m := &project.Member{
		UserId:  c.GetInt("user_id"),
		SpaceId: apply.SpaceId,
	}
	if in := m.MemberInSpace(); !in {
		render.CustomerError(c, render.CODE_ERR_NO_PRIV, "user is not in the project space")
		return
	}

	build := &deploy.Build{
		ApplyId: id,
	}
	if err := build.Detail(); err != nil {
		render.AppError(c, err.Error())
		return
	}

	var output []*command.TaskResult
	if build.Status == deploy.BUILD_STATUS_START {
		_, output, _ = buiTask.StatusTask(id)
	} else {
		gostring.JsonDecode([]byte(build.Output), &output)
	}

	render.JSON(c, map[string]interface{}{
		"apply_id":    id,
		"status":      build.Status,
		"start_time":  build.StartTime,
		"finish_time": build.FinishTime,
		"tar":         build.Tar,
		"output":      output,
		"errmsg":      build.Errmsg,
		"ctime":       build.Ctime,
	})
}

func BuildStart(c *gin.Context) {
	id := gostring.Str2Int(c.PostForm("id"))
	if id == 0 {
		render.ParamError(c, "id cannot be empty")
		return
	}
	apply := &deploy.Apply{
		ID: id,
	}
	//查询apply表中的上线信息并封装在Apply（apply为指针对像）中
	if err := apply.Detail(); err != nil {
		render.AppError(c, err.Error())
		return
	}
	//将用户user_id（项目成员） 、空间id（spaceid）封装在Member是（m为指针对像）
	m := &project.Member{
		UserId:  c.GetInt("user_id"),
		SpaceId: apply.SpaceId,
	}
	//校验用户是属于空间中（是一种权限校验）
	if in := m.MemberInSpace(); !in {
		render.CustomerError(c, render.CODE_ERR_NO_PRIV, "user is not in the project space")
		return
	}

	// apply must audit passed
	if apply.AuditStatus != deploy.AUDIT_STATUS_OK {
		render.AppError(c, "apply audit_status must passed")
		return
	}

	// apply status checked
	if apply.Status != deploy.APPLY_STATUS_NONE && apply.Status != deploy.APPLY_STATUS_FAILED {
		render.AppError(c, "apply status must none or failed")
		return
	}

	build := &deploy.Build{
		ApplyId: id,
	}
	var (
		exists bool
		err    error
	)
	//校验build是否已经存在
	if exists, err = build.Exists(); err != nil {
		render.AppError(c, err.Error())
		return
	}

	if exists {
		if build.Status == deploy.BUILD_STATUS_START {
			render.AppError(c, "deploy build status wrong")
			return
		}
		if err := build.Delete(); err != nil {
			render.AppError(c, err.Error())
			return
		}
	}

	// create build task
	p := &project.Project{
		ID: apply.ProjectId,
	}
	//将project信息查询封装在Project中（p为对像指针）
	if err := p.Detail(); err != nil {
		render.AppError(c, err.Error())
		return
	}
	build.ApplyId = id
	build.Status = deploy.BUILD_STATUS_START
	//持久一条初始信息在build表中
	if err := build.Create(); err != nil {
		render.AppError(c, err.Error())
		return
	}

	// build
	workSpace := gostring.JoinStrings(syncd.App.LocalTmpSpace, "/", gostring.Int2Str(build.ApplyId))
	packFile := gostring.JoinStrings(syncd.App.LocalTarSpace, "/", gostring.Int2Str(build.ApplyId), ".tgz")

	//封装一个git库对像 并设置分支、commit（commit是要git reset的commit号）
	repo := buiTask.NewRepo(p.RepoUrl, workSpace)
	if apply.BranchName != "" {
		repo.SetBranch(apply.BranchName)
	}
	if apply.CommitVersion != "" {
		repo.SetCommit(apply.CommitVersion)
	}

	bui, err := buiTask.NewBuild(repo, workSpace, syncd.App.LocalTmpSpace, packFile, p.BuildScript)
	if err != nil {
		render.AppError(c, err.Error())
		return
	}

	buiTask.NewTask(id, bui, func(id int, packFile string, result *buiTask.Result, taskResult []*command.TaskResult) {
		status := deploy.BUILD_STATUS_SUCCESS
		errmsg := ""
		if err := result.GetError(); err != nil {
			status = deploy.BUILD_STATUS_FAILED
			errmsg = err.Error()
			packFile = ""
		}
		output := string(gostring.JsonEncode(taskResult))
		b := deploy.Build{
			ApplyId: id,
			Status:  status,
			Tar:     packFile,
			Output:  output,
			Errmsg:  errmsg,
		}
		b.Finish()

		// run hook script 并return 执行结果 hooks script 失败不影响构建本身
		hookResult := common.HookBuild(id)
		syncd.App.Logger.Info(" 执行hookBuild的返回信息%s", string(gostring.JsonEncode(hookResult)))

		//将hook执行的脚本命令结果更新到build的output（构建日志信息）中。
		if hookResult != nil {
			syncd.App.Logger.Info("合并build的与hookbuild执行的结果")
			taskResult = append(taskResult, hookResult...)
			syncd.App.Logger.Info("更新合并结果（build的与hookbuild执行的结果）")
			b.FinishHookBuild(taskResult)
		}

	})
	render.JSON(c, nil)
}
