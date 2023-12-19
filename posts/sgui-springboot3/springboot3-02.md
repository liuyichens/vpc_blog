---
title: 尚硅谷SpringBoot3视频笔记-2
date: 2023-10-17 19:00:00
author: LiuYichen
categories:
  - SpringBoot
  - SpringBoot3
tags:
  - SpringBoot
  - SpringBoot3
  - 视频笔记
permalink: /pages/bdef56
---

SpringBoot3 视频的第二篇笔记，本篇记录 SpringBoot 的依赖管理机制

---

## 为什么导入某些场景启动器不需要编写版本号呢

一旦导入对应的场景启动器，对应的场景启动器就会将该场景下需要的核心依赖全部导入；每一个 SpringBoot 项目都有一个父项目`spring-boot-starter-parent`；而父项目也会有一个父项目`spring-boot-dependencies`，在这个父项目中所有的依赖版本号都定义在`properties`标签中，这里是父项目的版本管理中心，把所有的常见的 jar 依赖版本都声明好了。
如果需要自定义版本号，可以在 maven 中重新编写版本号，`maven`会根据就近原则，优先使用自定义的版本。

1.  在`properties` 标签中编写版本号
2.  在对应的 maven 坐标的 version 标签中编写版本号

如果引入的是第三方的包，父级项目中是没有对应的依赖管理的，版本号必须指定
