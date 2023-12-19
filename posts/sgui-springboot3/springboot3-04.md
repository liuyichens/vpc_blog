---
title: 尚硅谷SpringBoot3视频笔记-4
date: 2023-10-18 08:00:00
author: LiuYichen
categories:
  - SpringBoot
  - SpringBoot3
tags:
  - SpringBoot
  - SpringBoot3
  - 视频笔记
  - SpringBoot常用注解
permalink: /pages/378721
---

这是 SpringBoot3 第四篇视频笔记，本篇主要记录 SpringBoot 常用注解。

---

SpringBoot 全面摒弃了 XML 配置的方式，全部采用注解的方式进行**组件注册**，**组件配置**。

## 1. 用的组件注册的注解

`@Configuration`、`@SpringBootConfiguration`、`@Bean`、`@Scope`、`@Controller`、`@Service`、`@Repository`、`@Component`、`@Import`、`@ComponentScan`

## 2. 组件注册

使用`@Bean`来注册组件

- 新建一个实体类

```java
@Data
public class User {
    private Long id;
    private String name;
}
```

- 新建一个配置类，并在这个配置类中将`User`注册为 Bean

```java
@Configuration // 表示这是一个配置类，用于代替以前的xml配置文件，配置类本身也是容器中的组件
public class AppConfig {

    @Bean // @Bean注解代替以前的Bean标签，组件在容器中的名字默认是方法名
    // @Bean("userHa") 也可以通过这种方式来修改组件在容器中的名字
    public User user(){
        User user = new User();
        user.setId(1L);
        user.setName("haha");
        return user;
    }
}

```

`Bean`在容器中注册后，名字默认是方法的名称，也可以通过`@Bean("userHa")`来修改组件在容器中的名字。`Bean`默认是单实例的，也就是在容器中保存一份，每次获取都是同一个对象。
如果想要修改组件为多实例的，可以使用`@Scope`注解，`@Scope("prototype")`表示多实例。

```java
@Scope("prototype")
@Bean
public User user(){}
```

### 2.1 导入第三方的 Bean

- 第一种方式就是按照上面的方式，定义一个方法使用`@Bean`注解进行组件注册
- 第二种方式使用`@Import()`注解导入
  例如

```java
@Import(User.class)
@Configuration // 表示这是一个配置类，用于代替以前的xml配置文件
public class AppConfig {}
```

这种情况下导入的组件的名称默认是全类名

## 3. 条件注解

`@ConditionOnXXX`

如果注解指定的条件成立，触发指定行为

- `@ConditionalOnClass`: 如果类路径中存在这个类，则触发指定行为
- `@ConditionalOnMissingClass`: 如果类路径中不存在这个类，则触发指定行为
- `@ConditionalOnBean`: 如果容器中存在这个组件，则触发指定行为
- `@ConditionalOnMissingBean`: 如果容器中不存在这个组件，则触发指定行为

例如下面的这段代码演示的场景

```java
/**
 * 容器中存在 `com.alibaba.druid.FastsqlException`，就导入Cat组件，名为`cat01`
 * @return
 */
@ConditionalOnClass(name = "com.alibaba.druid.FastsqlException") //这里建议使用name导入全类名，这样如果项目中不存在
@Bean
public Cat cat01() {
    return new Cat();
}
/**
 * 容器中不存在 `com.alibaba.druid.FastsqlException`，就导入Dog组件，名为`dog01`
 * @return
 */
@ConditionalOnMissingClass(value = "com.alibaba.druid.FastsqlException")
@Bean
public Dog dog01(){
    return new Dog();
}
@ConditionalOnBean(value = Dog.class)
@Bean
public User user01(){
    return new User();
}
@ConditionalOnMissingBean(value = Dog.class)
@Bean
public User user02(){
    return new User();
}
```

上面的这些条件都是放在方法上的，只对方法起作用，如果将条件注解放在类上，则对整个类起作用

## 4. 属性绑定

`@ConfigurationProperties`，`@EnableConfigurationProperties`

将容器中任意组件的属性值和配置文件中的配置项的值进行绑定

- 将类注册为容器中的 Bean
- 使用`@ConfigurationProperties` 注解声明组件和配置文件的哪些配置项进行绑定

例如新建一个`Cat`类，在配置文件中配置对应的属性值

```java
@Component
@ConfigurationProperties(prefix = "cat")
@Data
public class Cat {
    private Long id;
    private String name;
    private String color;
}
```

```properties
cat.id=1
cat.name=皮皮九
cat.color=白色
```

也可以通过下面这种方式进行绑定
`Cat`类

```java
@Data
public class Cat {
    private Long id;
    private String name;
    private String color;
}
```

配置类

```java
@Configuration
public class AppConfig2 {
    @ConfigurationProperties(prefix = "cat")
    @Bean
    public Cat cat(){
        return new Cat();
    }
}
```

### 4.2 通过`@EnableConfigurationProperties`和`@ConfigurationProperties`注解一起使用

前面要让配置文件中的值和配置类中的属性进行绑定，必须先将配置类注册为组件，还有一种实现的方式如下方代码
`Cat`类

```java
@ConfigurationProperties(prefix = "cat")
@Data
public class Cat {
    private Long id;
    private String name;
    private String color;
}
```

因为没有被注册为组件 Bean，因此这里`@ConfigurationProperties`会提示报错

配置类中

```java
@EnableConfigurationProperties(Cat.class)
@Configuration
public class AppConfig2 {}
```

这里对`@EnableConfigurationProperties(Cat.class)`作一个解释

- 开启`Cat`组件的属性绑定
- 默认将组件自己放在容器中
- **使用场景**：这个注解经常用来导入第三方写好的组件进行属性绑定，由于 SpringBoot 的包扫描规则，第三方包是扫描不到的，无法注册为容器中的组件
