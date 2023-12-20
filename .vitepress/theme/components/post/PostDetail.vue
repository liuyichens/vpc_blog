<script setup>
import Page from "../page/Page.vue";
import AsideBox from "../aside/AsideBox.vue";
import VPContentDoc from 'vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue'
import {useData} from "vitepress";

const {frontmatter, page} = useData()
</script>

<template>
  <Page class="my-8 VPDoc">
    <div class="flex p-2.5 bg-white text-sm text-[#999] border-b border-gray-200 slide-enter"><a href="/">Home</a></div>
    <div class="p-6 bg-white">
      <div class="post-title slide-enter">
        <h1 class="text-2xl font-medium text-center my-5 px-5 text-[#18191a]">{{ frontmatter.title }}</h1>
      </div>
      <Content class="vp-doc slide-enter-content"/>
    </div>
    <template #right>
      <nav class="sticky top-[--header-height] overflow-y-auto max-h-[calc(100vh-var(--header-height))]">
        <aside-box title="目录" class="slide-enter">
          <VPContentDoc class="content-outline"/>
        </aside-box>
      </nav>
    </template>
  </Page>
</template>

<style>
.content-outline .content{
  padding-left: 0;
  border: none;
}
.content-outline .outline-marker,
.content-outline .outline-title,
.content-outline #doc-outline-aria-label {
  display: none !important;
}
</style>
