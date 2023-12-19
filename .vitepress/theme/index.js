// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import './styles/style.css'

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}

