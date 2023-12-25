<script setup>
import { useData } from 'vitepress'
import { computed, ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import Header from './components/header/Header.vue'
import Main from './components/main/Main.vue'
import Footer from './components/footer/Footer.vue'
import Home from './components/home/Home.vue'
import PostDetail from './components/post/PostDetail.vue'
import Favor from './components/favor/Favor.vue'
import About from './about/About.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData()

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
</script>

<template>
  <el-config-provider :locale="locale">
    <el-container class="font-sans text-gray-700 dark:text-gray-200 relative" direction="vertical">
      <Header />
      <Main>
        <Home v-if="frontmatter.home" />
        <PostDetail v-if="frontmatter.blog === 'post'" />
        <Favor v-else-if="frontmatter.favor" />
        <About v-else-if="frontmatter.about" />
      </Main>
      <Footer />
      <el-backtop :right="100" :bottom="100" />
    </el-container>
  </el-config-provider>
</template>
