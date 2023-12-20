<script setup>
import {useData} from 'vitepress'
import Header from "./components/header/Header.vue";
import Main from "./components/main/Main.vue";
import Footer from "./components/footer/Footer.vue";
import Home from "./components/home/Home.vue";
import PostDetail from "./components/post/PostDetail.vue";
// https://vitepress.dev/reference/runtime-api#usedata
const {site, frontmatter} = useData()
</script>

<template>
  <div>
    <Header/>
    <Main>
      <Home v-if="frontmatter.home">

      </Home>
      <PostDetail v-else>
      </PostDetail>
    </Main>
    <Footer/>
  </div>
</template>
