---
title: 尚硅谷SpringBoot3视频笔记-1
date: 2023-10-17 00:00:00
author: LiuYichen
categories:
  - SpringBoot
  - SpringBoot3
tags:
  - SpringBoot
  - SpringBoot3
  - 视频笔记
permalink: /pages/d337fa
---

这篇文章是视频笔记的第一篇文章，入门 SpringBoot3，简单介绍 SpringBoot3

---

# {{$frontmatter.title}}

## 1. SpringBoot 是什么

SpringBoot 是一个快速开发框架，它封装了 Spring 框架，简化了 Spring 框架的使用，提供了各种开箱即用的功能。只需要编写少量的配置即可快速整合第三方框架

## 2. SpringBoot 特点

- 快速创建一个独立的 Spring 应用
- 直接嵌入 Tomcat，无需部署 WAR 文件
- 提供各种场景启动器，只需要导入相应的`starter`即可启动对应的场景
- 简化 Spring 配置，支持各种配置方式。当导入对应的场景启动器后，这个场景的配置会提供默认的自动配置项
- 约定大于配置，如果需要定制，只需要修改其中的几项配置即可实现
- 还提供了生产几倍的特性；例如**监控指标**,**健康检查**,**外部化配置**等。
  ::: info
  总结：SpringBoot 可以简化开发，简化配置，简化整合，简化部署，简化运维，简化监控
  :::

## 3. SpringBoot 打包

SpringBoot 打包需要一个导入一个打包插件，在 `pom.xml` 中导入

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>
```

执行 `mvn clean package`即可将项目打包成为一个`jar`包

## 4. SpringBoot 整合其它场景启动器

官方提供的启动器一般命名为 `spring-boot-starter-*`;
第三方提供的启动器名为为 `*-spring-boot-starter`
