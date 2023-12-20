<script setup>
import {useData} from 'vitepress'
import Header from "./components/header/Header.vue";
import Main from "./components/main/Main.vue";
import Footer from "./components/footer/Footer.vue";
import Home from "./components/home/Home.vue";
import PostDetail from "./components/post/PostDetail.vue";
import Favor from "./components/favor/Favor.vue";
import About from "./about/About.vue";
// https://vitepress.dev/reference/runtime-api#usedata
const {site, frontmatter} = useData()
</script>

<template>
  <div class="font-sans text-gray-700 dark:text-gray-200 relative">
    <Header/>
    <Main>
      <Home v-if="frontmatter.home"></Home>
      <PostDetail v-if="frontmatter.blog==='post'">
      </PostDetail>
      <Favor v-else-if="frontmatter.favor"/>
      <About v-else-if="frontmatter.about"/>
    </Main>
    <Footer/>
  </div>
</template>
