<script setup>
import {useData, withBase} from "vitepress";

const {site, theme} = useData()
import VPSocialLinks from 'vitepress/dist/client/theme-default/components/VPSocialLinks.vue'
</script>

<template>
  <div
      class="author-panel relative overflow-hidden text-center pb-5 aside-style">
    <div class="author-back-image">
      <img class="max-w-full w-full h-auto max-h-[110px]" :src="withBase('/img/author_background_image.webp')" alt="">
    </div>
    <div class="auth-avatar text-center absolute top-16 left-[calc(50%-32px)]">
      <img :src="withBase(theme.avatar)" alt=""
           class="h-16 w-16 border-[3px] border-solid border-white rounded-full bg-white">
    </div>
    <div class="mt-6 text-sm">{{ theme.author }}</div>
    <div class="mt-[5px] text-sm text-[#666]">
      <div class="px-7">{{ site.description }}</div>
    </div>
    <div class="social-links" v-if="theme.socialLinks">
      <VPSocialLinks :links="theme.socialLinks"/>
    </div>
  </div>
</template>

<style scoped>

</style>
