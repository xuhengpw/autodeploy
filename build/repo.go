// Copyright 2019 syncd Author. All Rights Reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

package build

import (
	"fmt"
)

type Repo struct {
	url    string //git 仓库地址
	branch string //要checkout的分支
	commit string //要reset的commit号
	local  string //使用本地空间
}

func NewRepo(url, local string) *Repo {
	repo := &Repo{
		url:   url,
		local: local,
	}
	return repo
}

func (r *Repo) SetBranch(branch string) {
	r.branch = branch
}

func (r *Repo) SetCommit(version string) {
	r.commit = version
}

func (r *Repo) Fetch() []string {
	cmds := []string{
		fmt.Sprintf("rm -fr %s", r.local),
		fmt.Sprintf("/usr/bin/env git clone -q %s %s", r.url, r.local),
	}
	if r.branch != "" {
		cmds = append(cmds, fmt.Sprintf("cd %s && /usr/bin/env git checkout -q %s", r.local, r.branch))
	}
	if r.commit != "" {
		cmds = append(cmds, fmt.Sprintf("cd %s && /usr/bin/env git reset -q --hard %s", r.local, r.commit))
	}
	return cmds
}
