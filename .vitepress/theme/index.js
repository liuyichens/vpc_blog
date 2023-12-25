// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './styles/style.css'

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({app, router, siteData}) {
    // ...
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    if (navigator && navigator.userAgent && navigator.userAgent.match(/Win[a-z0-9]*;/)) {
      document.documentElement.classList.add('ui-scrollbars')
    }
  }
}

