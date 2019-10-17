<p align="center">
    <img align="center" src="docs/assets/img/logo-blue.svg" width="350px" />
</p>
<h3 align="center">SyncdX - 自动化部署工具</h3>
<p align="center">SyncdX是一款基于Syncd开源的代码部署工具，在此基础上做的二次开发，目的是更加满足公司对上线流程的要求。</p>

## 文档

[查看文档（此文件来源于syncd.cc，是做的二次开发）](https://syncd.cc)

## 特性

- Go语言开发，编译简单、运行高效
- Web界面访问，交互友好
- 权限模型灵活自由
- 支持自定义构建
- 支持Git仓库
- 支持分支、Tag上线
- 部署Hook支持，可扩展性强
- 完善的上线工作流
- 邮件通知机制

## 修改的地方
- 修改项目发布时根据执行的shell命令的结果来判断发布是否成功
- 修复发布单构建过程中的hook脚本错误问题
- 将构建过程中hook脚本命令执行结果加入构建的结构中

## 项目地址

Github: https://github.com/yangyongli/autodeploy


## 获取帮助

本项目根据以下源码做二次开发，目的是更加满足公司对上线流程的要求
Syncd https://github.com/dreamans/syncd


## LICENSE

本项目采用 MIT 开源授权许可证，完整的授权说明已放置在 LICENSE 文件中。