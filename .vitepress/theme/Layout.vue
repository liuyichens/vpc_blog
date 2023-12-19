<script setup>
import {useData} from 'vitepress'
import Header from "./components/header/Header.vue";
import Main from "./components/main/Main.vue";
import Footer from "./components/footer/Footer.vue";
import Home from "./components/home/Home.vue";
// https://vitepress.dev/reference/runtime-api#usedata
const {site, frontmatter} = useData()
</script>

<template>
  <div>
    <Header/>
    <Main>
      <Home v-if="frontmatter.home">

      </Home>
      <div v-else>
        <a href="/">Home</a>
        <Content/>
      </div>
    </Main>
    <Footer/>
  </div>
</template>
