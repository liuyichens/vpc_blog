---
title: 尚硅谷SpringBoot3视频笔记-3
date: 2023-10-17 20:00:00
author: LiuYichen
categories:
  - SpringBoot
  - SpringBoot3
tags:
  - SpringBoot
  - SpringBoot3
  - 视频笔记
  - SpringBoot自动配置
permalink: /pages/516b49
---

SpringBoot3 的第三篇视频笔记，本篇简单记录了 SpringBoot 的自动配置原理

---

## 1. 获取 SpringBoot 中所有的 IOC 容器

在 SpringBoot 主启动类中，`SpringApplication.run()`会返回所有的 IOC 容器，这些容器中都自动配置好了对应的组件

```java
public static void main(String[] args) {
    // 获取IOC容器
    ConfigurableApplicationContext ioc = SpringApplication.run(MainApplication.class, args);
    // 获取容器中所有组件的名字
    String[] beanDefinitionNames = ioc.getBeanDefinitionNames();
    for (String beanDefinitionName : beanDefinitionNames) {
        System.out.println(beanDefinitionName);
    }
}
```

## 2. SpringBoot 包扫描规则

SpringBoot 默认扫描主启动类所在的包及其子包，`@SpringBootApplication`用于标注应用的主启动类，相当于`@Configuration`、`@EnableAutoConfiguration`、`@ComponentScan`三个注解的结合

如果想要扫描其它位置的包，有两种办法

- 1. 在启动类上使用`@SpringBootApplication(scanBasePackages = "com.yc")`，指定需要扫描的包
- 2. 上面提到`@SpringBootApplication`注解是一个复合注解

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

因此可以使用`@ComponentScan("com.yc")`直接指定扫描路径

## 3. SpringBoot 自动配置默认值

配置文件的所有配置项都和某个类对象的属性一一绑定，绑定了配置文件中每一项的类称为**自动配置类**,在[官方文档](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#appendix.application-properties)中列举了一些配置项，或者查看源码查看绑定的属性类

## 4. 按需自动配置

例如导入`spring-boot-starter-web`的 web 应用场景，除了导入这个场景相关的依赖外，还导入了`spring-boot-starter`，这个依赖是所有`starter`的`starter`,这个`starter`就是基础核心`starter`，这个`starter`中还导入了`spring-boot-autoconfigure`依赖，这个依赖中就包含了所有场景自动配置的类，虽然全场景的自动配置都在`spring-boot-autoconfigure`依赖中，但不是每个场景都会生效，只有导入哪个场景才会使这个场景生效

::: tip
总结：只用导入了相应的场景启动器，相应的场景才会生效，这个对于大部分的场景启动来说都是自动的，某些情况下需要编写对应的配置才可以开启对应的场景
:::
