<script setup>
import Page from "../page/Page.vue";
import {useData} from "vitepress";

const {frontmatter} = useData()
</script>

<template>
  <Page class="my-8">
    <div class="flex p-2.5 bg-white text-sm text-[#999] border-b border-gray-200"><a href="/">Home</a></div>
    <div class="p-6 bg-white">
      <div class="post-title">
        <h1 class="text-2xl font-medium text-center my-5 px-5 text-[#18191a]">{{frontmatter.title}}</h1>
      </div>
      <Content class="vp-doc"/>
    </div>
    <template #right>
      Table of Content
    </template>
  </Page>
</template>

<style scoped>

</style>