---
title: 尚硅谷SpringBoot3视频笔记-5
date: 2023-10-18 22:31:00
author: LiuYichen
categories:
  - SpringBoot
  - SpringBoot3
tags:
  - SpringBoot
  - SpringBoot3
  - 视频笔记
  - SpringBoot自动配置
permalink: /pages/3b2cc1
---

这是 SpringBoot3 第五篇视频笔记，本篇深入记录 SpringBoot 自动配置原理。

---

## 自动配置流程

- 1. 导入相关的场景化依赖包
  - 场景启动器会自动导入相关场景的所有依赖
  - 每个场景启动器都引入了一个`spring-boot-starter`这个核心场景启动器
  - **核心场景启动器**引入了`spring-boot-autoconfigure`包
  - `spring-boot-autoconfigure`包中包含了所有场景的所有配置
  - 只要这个包下面的所有类都生效，那么相当于导入的场景官方整合就生效了
  - 但是 SpringBoot 默认是不能扫描到`spring-boot-autoconfigure`这个包下面的所有配置类的
- 2. 主启动程序配置
  - 使用`@SpringBootApplication`将类标记为 SpringBoot 应用的启动类
  - 这个注解由三个注解组成 - `@SpringBootConfiguration` 标记这个类是一个配置类 - `@EnableAutoConfiguration` 开启自动配置功能 - `@ComponentScan` 扫描包位置

```java
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(
excludeFilters = {@Filter(
type = FilterType.CUSTOM,
classes = {TypeExcludeFilter.class}
), @Filter(
type = FilterType.CUSTOM,
classes = {AutoConfigurationExcludeFilter.class}
)}
)
public @interface SpringBootApplication {}
```

- 3. `@EnableAutoConfiguration`这个注解是 SpringBoot 开启自动配置的**核心注解**

  - 这个注解的核心由`@Import({AutoConfigurationImportSelector.class})`提供，批量给容器中导入组件(演示代码 5-1)
  - 在`SpringBoot3.1.2`版本下，SpringBoot 启动会默认加载 146 个配置类
  - 这个一百多个配置类来自于`spring-boot-autoconfigure`包下的`META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports`文件指定的 (演示代码 5-2)
  - 项目启动的时候会通过`@Import`注解去导入`spring-boot-autoconfigure`包下的所有`AutoConfiguration`标注的自动配置类，这些类的名字都有统一的规范`xxxAutoConfiguration`

> 演示代码 5-1

```java
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@AutoConfigurationPackage
@Import({AutoConfigurationImportSelector.class})
public @interface EnableAutoConfiguration {}
```

> 演示代码 5-2

```java
protected List<String> getCandidateConfigurations(AnnotationMetadata metadata, AnnotationAttributes attributes) {
    List<String> configurations = ImportCandidates.load(AutoConfiguration.class, this.getBeanClassLoader()).getCandidates();
    Assert.notEmpty(configurations, "No auto configuration classes found in META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports. If you are using a custom packaging, make sure that file is correct.");
    return configurations;
}
```

- 4. 按需生效

  - 虽然这些自动配置类已经全部导入到了容器中，但是并不是所有的配置类都会生效
  - 配置类中都包含有条件注解`@ConditionOnxxx`，只有条件成立了，配置类才会生效

- 5. `xxxAutoConfiguration` 自动配置类的作用
  - 给容器中使用`@Bean`放一堆组件
  - 每个自动配置类都可能有`@EnableConfigurationProperties`注解，用来把配置文件中指定前缀的属性值绑定到`xxxProperties`属性类中
  - 只需要修改配置文件的值，核心组件的底层参数就会被修改
