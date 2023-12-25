<script setup>
import VPContentDoc from 'vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue'
import { useData } from 'vitepress'
import Page from '../page/Page.vue'
import AsideBox from '../aside/AsideBox.vue'

const { frontmatter } = useData()
</script>

<template>
  <Page>
    <div class="flex flex-col lg:grid lg:grid-cols-12 lg:gap-4 VPDoc">
      <div class="lg:col-span-9 bg-white dark:bg-contentbg rounded doc-content">
        <div
          class="flex p-2.5 text-sm text-[#999] dark:text-white border-b border-gray-200 dark:border-gray-700 slide-enter"
        >
          <a href="/">Home</a>
        </div>
        <div class="p-6">
          <div class="post-title slide-enter">
            <h1 class="text-2xl font-medium text-center my-5 px-5 text-[#18191a] dark:text-white">
              {{
                frontmatter.title
              }}
            </h1>
          </div>
          <Content class="vp-doc slide-enter-content" />
        </div>
      </div>
      <div class="lg:col-span-3 order-first lg:order-last">
        <nav class="sticky top-[--header-height]">
          <AsideBox title="目录" class="slide-enter">
            <VPContentDoc class="content-outline" />
          </AsideBox>
        </nav>
      </div>
    </div>
  </Page>
</template>

<style scoped>
.doc-content {
  background-image: radial-gradient(var(--bg-img-color) 1px,transparent 0);
  background-size: 10px 10px;
}
.vp-doc {
  @apply overflow-x-hidden;
}
</style>

<style>
.content-outline .content {
  padding-left: 0;
  border: none;
}

.content-outline .outline-marker,
.content-outline .outline-title,
.content-outline #doc-outline-aria-label {
  display: none !important;
}
</style>
