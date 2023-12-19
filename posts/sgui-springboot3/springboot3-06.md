---
title: 尚硅谷SpringBoot3视频笔记-6
date: 2023-11-21 08:29:00
author: LiuYichen
categories:
  - SpringBoot
  - SpringBoot3
tags:
  - SpringBoot
  - SpringBoot3
  - 视频笔记
  - SpringBoot 配置文件
---

 这是 SpringBoot3 第六篇视频笔记，这里记录了Spring Boot中的配置文件格式

---

## yml格式配置文件


### 基本语法
 - yml文件是以`key: value`形式书写，使用**缩进**表示层级关系
 - **缩进**时不允许使用`Tab`键进行缩进，只能使用**空格**
 - 不论缩进多少空格，只要和相同层级的元素左对齐即可
 - yml文件中大小写敏感
 - 使用`#`注释

### yml支持方式
 - 支持对象: 键值对的集合
 - 支持数组
 - 单独的属性，例如字符串，数字，布尔值，日期等

### SpringBoot中配置yml格式的配置文件

::: code-group
```java[Person.java]
@Component
@ConfigurationProperties(prefix = "person")
@Data
public class Person {
    private String name;
    private Integer age;
    private Date birthDay;
    private Boolean like;
    private Child child;
    private List<Dog> dogs;
    private Map<String, Cat> cats;
}
```
```java[Child.java]
@Data
public class Child {
    private String name;
    private Integer age;
    private Date birthDay;
    private List<String> text;
}
```
```java[Dog.java]
@Data
public class Dog {
    private String name;
    private Integer age;
}
```
```java[Cat.java]
@Data
public class Cat {
    private String name;
    private Integer age;
}
```
:::

### yml配置
```yml[application.yml]
person:
  # 简单数据类型表示
  name: 皮皮
  age: 18
  birth-day: 2000/01/01 12:00:00
  like: true
  # 对象类型属性
  child:
    name: 灰灰
    age: 10
    birth-day: 2000/01/01 12:00:00
    # 数组类型表示
    text:
      - abc
      - cdf
  # 集合类型
  dogs:
    - name: 花花
      age: 2
    - name: 屡屡
      age: 3
  # map类型属性表示
  cats:
    # map可以使用键值对的形式表示
    c1:
      name: 小胖
      age: 4
    # 也可以使用对象的形式表示
    c2: {name: 小鬼, age: 5}
```

::: tip 提示
在yml文件中对于以下几种类型的说明
- 文本
  - **单引号**中的文本不会被转义
  - 但是**双引号**中的文本会被转义
- 大文本类型
  - `|`开头大文本写在下一层，文本中的原本格式会被保留
  - `>`开头大文本写在下一层，文本中的原本格式会被忽略，全部写成一行
- 多文档合并
  - 使用`---`可以将多个`yml`文档合并在一个文档中，但是每一个文档区域已让是内容独立的
:::

> 大文本演示

```yml
# 数组类型表示
text:
  - 'abc \n'
  - "def \n"
  - | 
    我是大文本
    我是小妖怪
    逍遥又自在
  - > 
    我是大文本
    我想要换行
    但是不让换
```

```bash
Person(..., text=[abc \n, def 
, 我是大文本
我是小妖怪
逍遥又自在
, 我是大文本 我想要换行 但是不让换
]), ...)})
```

> 文档合并演示

```yml
---

spring:
  servlet:
    multipart:
      enabled: false
      max-file-size: 10MB

---

server:
  port: 8899
```

## properties格式配置文件

```properties[application.properties]
# 对象属性值绑定
person.name=皮皮
person.age=18
person.birth-day=2000/01/01 12:00:00
person.like=true

# 复杂对象属性绑定
person.child.name=灰灰
person.child.age=10
person.child.birth-day=2000/01/01 12:00:00
# 数组
person.child.text[0]=abc
person.child.text[1]=cdf
# 对象集合
person.dogs[0].name=花花
person.dogs[0].age=2
person.dogs[1].name=屡屡
person.dogs[1].age=3
# map对象
person.cats.c1.name=小胖
person.cats.c1.age=4
person.cats.c2.name=小鬼
person.cats.c2.age=5
```

这里使用`@Component`注解将对象放到SpringBoot容器中进行管理，`@ConfigurationProperties(prefix = "person")`表示配置文件中以`person`开头的属性会绑定到`Person`对象中。
::: tip 提示
对于日期类型的属性，应该使用`yyyy/MM/dd HH:mm:ss`的格式，目前测试使用`yyyy-MM-dd`的格式无法识别
:::