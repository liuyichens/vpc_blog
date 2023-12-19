---
title: Markdown Extension Examples
date: 2023-01-01 00:00:00
author: Evan You
gravatar: eca93da2c67aadafe35d477aa8f454b8
twitter: "@youyuxi"
permalink: /pages/5cf76e
categories:
  - test
  - example
tags:
  - example
  - markdown
---

This page demonstrates some of the built-in markdown extensions provided by VitePress.

---

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## HTML

```html
<style>
  .box {
    background-color: #eee;
  }
  .container {
    width: 1190px;
    margin: 0 auto;
    background-color: yellow;
  }
</style>
<div class="container"></div>
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
