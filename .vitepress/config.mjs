import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  markdown: {
    headers: {
      level: [1, 2, 3, 4]
    }
  },
  themeConfig: {
    author: 'Liu Yichen',
    avatar: '/img/head.jpg',
    outline: {
      level: [1, 2, 3, 4],
      label: '目录'
    },
    socialLinks: [
      {icon: "github", link: "https://github.com/vuejs/vitepress"},
      {icon: "twitter", link: "..."},
    ],
  }
})
