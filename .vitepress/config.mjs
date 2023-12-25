import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import baseConfig from './theme/config/baseConfig.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig,
  title: 'My Log',
  description: 'A VitePress Site',
  markdown: {
    headers: {
      level: [1, 2, 3, 4],
    },
  },
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    logo: '/img/boke.svg',
    outline: {
      level: [1, 2, 3, 4],
      label: '目录',
    },
    search: {
      provider: 'local',
    },
    nav: [
      { link: '/', text: '首页' },
      { link: '/favor/', text: '收藏' },
      { link: '/about/', text: '关于' },
      { link: 'https://liuyichens.github.io/', text: '知识库' },
      { link: 'https://www.yuque.com/dashboard', text: '语雀' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
    ],
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx)
  },
  vite: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    ssr: {
      noExternal: ['element-plus'],
    },
  },
})

export async function processData(
  pageData,
  ctx,
  aside = 'left',
  sidebar = false,
) {
  const postPattern = baseConfig.blogPattern ?? 'blog/detail'
  if (pageData.relativePath.includes(postPattern)) {
    pageData.frontmatter.blog = 'post'
    pageData.frontmatter.aside = aside
    pageData.frontmatter.sidebar = sidebar
    pageData.frontmatter.prev = false
    pageData.frontmatter.next = false
  }
  else if (
    pageData.relativePath.startsWith('note/')
    && pageData.relativePath.endsWith('index.md')
  ) {
    pageData.frontmatter.catalogue = true
  }
}
