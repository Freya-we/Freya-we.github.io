---
title: Git 基础操作笔记
published: 2026-08-04
description: 整理 Git 的版本控制概念、本地仓库常用命令、分支操作和远程仓库协作流程。
tags:
  - Git
  - 开发工具
  - 版本控制
category: 开发工具
draft: false
pinned: false
comment: true
author: Freya Augustus
---

> 这篇笔记主要整理 Git 的基础概念、本地仓库操作、分支合并和 GitHub 远程仓库协作流程。
## 一、Git 概述
### 1. 版本控制系统

- **集中式版本控制工具**：单一集中的服务器保存所有文件的修订版本
- **分布式版本控制工具**：客户端提取最新版本+完整镜像代码仓库
Git 是分布式版本控制工具。

### 2. Git 工作机制
![Git 笔记截图](/assets/posts/git-notes/git-20260629181801.png)
工作区：代码在磁盘中存放的目录。
### 3. Git 和代码托管中心

代码托管中心是基于网络服务器的远程代码仓库，简单称为**远程库**

- **局域网**：GitLab
- **互联网**：GitHub，Gitee

## 二、Git 常用命令

| 命令名称                              | 作用          |
| --------------------------------- | ----------- |
| git config --global user.name 用户名 | 设置用户签名      |
| git config --global user.email 邮箱 | 设置用户签名      |
| **git init**                      | **初始化本地库**  |
| **git status**                    | **查看本地库状态** |
| **git add 文件名**                   | **添加到暂存区**  |
| **git commit -m"日志信息" 文件名**       | **提交到本地库**  |
| **git reflog**                    | **查看历史记录**  |
| **git reset --hard 版本号**          | **版本穿梭**    |

### 1. 设置用户签名

#### 1）基本语法

```
git config --global user.name 用户名

git config --global user.email 邮箱
```
#### 2）案例演示
![Git 笔记截图](/assets/posts/git-notes/git-20260629190354.png)
![Git 笔记截图](/assets/posts/git-notes/git-20260629190421.png)

签名的作用是区分不同操作者身份，以此确定本次提交是谁做的
**注意**：这里设置的用户签名与登录 GitHub 的账号无关。

### 2. 初始化本地库

#### 1）基本语法

```
git init
```

#### 2）演示

![Git 笔记截图](/assets/posts/git-notes/git-20260629203131.png)

**注意**：以下演示使用 Linux 命令。

### 3. 查看本地库状态

#### 1）基本语法

```
git status
```
#### 2）演示
##### 初次看

![Git 笔记截图](/assets/posts/git-notes/git-20260629204447.png)

解释
```
On branch master
当前分支
No commits yet
没有提交过的
nothing to commit (create/copy files and use "git add" to track)
没有需要提交的
```

新建文件
```
vim hello.txt
i:进入编辑文件
Esc yy 16p
shift : esc+:wq
```
##### 新建文件看

![Git 笔记截图](/assets/posts/git-notes/git-20260630100507.png)

##### 添加到暂存区后
![Git 笔记截图](/assets/posts/git-notes/git-20260630115243.png)



### 4. 添加暂存区

#### 1）基本语法
```
git add 文件名
```

#### 2）演示

![Git 笔记截图](/assets/posts/git-notes/git-20260630101338.png)

### 5. 提交本地库

#### 1）基本语法
```
git commit -m "日志信息" 文件名
```
#### 2）演示
![Git 笔记截图](/assets/posts/git-notes/git-20260630102544.png)

![Git 笔记截图](/assets/posts/git-notes/git-20260630102941.png)

### 6. 修改文件

#### 1）基本语法
```
vim hello.txt
esc退出编辑模式，:w写入 :q退出 :wq 写入又退出

```
#### 2）演示
![Git 笔记截图](/assets/posts/git-notes/git-20260630103627.png)

![Git 笔记截图](/assets/posts/git-notes/git-20260630104626.png)
### 7. 历史版本
#### 1）基本语法
```
git reflog 查看版本信息
git log 查看版本详细信息
git reset --hard 版本号   穿越版本
```
#### 2）演示

![Git 笔记截图](/assets/posts/git-notes/git-20260630110946.png)

![Git 笔记截图](/assets/posts/git-notes/git-20260630111432.png)

## 三、Git 分支操作
![Git 笔记截图](/assets/posts/git-notes/git-20260630112033.png)

### 3.1 什么是分支
每个任务的单独分支，程序员可以把自己的工作从开发主线上分离开来，开发自己分支的同时不会影响主线分支的运行

### 3.2 分支的好处
同时并行推进多个功能开发，提高开发效率
某一个分支开发失败不会影响其他分支

### 3.3 分支的操作

| 命令名称             | 作用             |
| ---------------- | -------------- |
| git branch 分支名   | 创建分支           |
| git branch -v    | 查看分支           |
| git checkout 分支名 | 切换分支           |
| git merge 分支名    | 把指定的分支合并到当前分支上 |

#### 1.查看分支
##### 1）基本语法
```
git branch -v
```
##### 2）演示
![Git 笔记截图](/assets/posts/git-notes/git-20260630172105.png)
#### 2.创建分支

##### 1）基本语法
```
git branch 分支名
```
##### 2）演示

![Git 笔记截图](/assets/posts/git-notes/git-20260630174711.png)

#### 3.切换分支

##### 1）基本语法
```
git checkout hot-fix
```
##### 2）演示
![Git 笔记截图](/assets/posts/git-notes/git-20260630180459.png)

![Git 笔记截图](/assets/posts/git-notes/git-20260630182332.png)

#### 4.合并分支

##### 1）基本语法
```
git merge 分支名
```

##### 2）演示
![Git 笔记截图](/assets/posts/git-notes/git-20260630220918.png)

#### 5.合并分支（冲突分支）
两个分支在同一个文件的“同一行”或“相邻行”（最常见）有两套完全不同的修改

![Git 笔记截图](/assets/posts/git-notes/git-20260630224031.png)

![Git 笔记截图](/assets/posts/git-notes/git-20260630224607.png)

![Git 笔记截图](/assets/posts/git-notes/git-20260630225009.png)
## 四、Git 团队协作机制
#### 4.1 团队内协作
![Git 笔记截图](/assets/posts/git-notes/git-20260630225604.png)

#### 4.2 跨团队协作

![Git 笔记截图](/assets/posts/git-notes/git-20260630225826.png)

## 五、GitHub 操作

### 5.1 创建远程仓库
### 5.2 远程仓库操作

| 命令名称                   | 作用                           |
| ---------------------- | ---------------------------- |
| git remote -v          | 查看当前所有远程地址别名                 |
| git remote add 别名 远程地址 | 起别名                          |
| git push 别名 分支         | 推送本地分支内容到远程仓库                |
| git clone 远程地址         | 将远程仓库的内容克隆到本地                |
| git pull 远程库地址别名 远程分支名 | 将远程仓库对于分支最新内容拉下来后与当前本地分支直接合并 |
#### 5.2.1 创建远程仓库别名
##### 1）基本语法
```
git remote -v
git remote add 别名 远程地址
```

##### 2）演示

![Git 笔记截图](/assets/posts/git-notes/git-20260701104304.png)

![Git 笔记截图](/assets/posts/git-notes/git-20260701104149.png)

#### 5.2.2 推送本地分支到远程仓库

##### 1）基本语法
```
git push 别名 分支
```
##### 2）演示
![Git 笔记截图](/assets/posts/git-notes/git-20260701110628.png)

#### 5.2.3 克隆远程仓库到本地

##### 1）基本语法
```
git clone 远程地址
```
##### 2）演示
![Git 笔记截图](/assets/posts/git-notes/git-20260701111534.png)
clone 会做 1.拉取代码    2.初始化本地仓库   3.创建别名

#### 5.2.4 邀请加入团队

#### 5.2.5 团队外协作

