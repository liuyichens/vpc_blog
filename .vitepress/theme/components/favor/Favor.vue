<script setup>
import { useData } from 'vitepress'
import Page from '../page/Page.vue'

const { frontmatter } = useData()
</script>

<template>
  <Page>
    <div class="container grid bg-white grid-cols-4 p-6 gap-6 dark:bg-[var(--ui-card-background)] dark:text-white">
      <div
        v-for="(w, index) in frontmatter.websites"
        :key="w.title"
        class="site-item relative top-0 duration-300 w-full border border-gray-200 dark:border-gray-700 p-2.5 rounded hover:-top-[5px] slide-enter"
        :style="{
          '--enter-stage': index,
          '--enter-step': '60ms',
        }"
      >
        <a :href="w.link" target="_blank" class="flex gap-2.5 items-center text-gray-900 dark:text-gray-200">
          <div>
            <img :src="w.logo" alt="" class="w-9 h-9">
          </div>
          <div class="flex-1 w-0">
            <div class="overflow-hidden text-ellipsis whitespace-nowrap">
              {{ w.title }}
            </div>
            <div :title="w.desc" class="overflow-hidden text-ellipsis whitespace-nowrap text-sm">{{ w.desc }}</div>
          </div>
        </a>
      </div>
    </div>
  </Page>
</template>

<style scoped>

</style>
