<script setup>
import {computed, ref} from 'vue'
import PostList from "../post/PostList.vue";
import Page from '../page/Page.vue'
import Author from "../aside/Author.vue";
import {data as posts} from '../../scripts/posts.data'

const categories = computed(() =>{
  const allCategory = posts.map(post => post.category).flat()
  return [...new Set(allCategory)]
})
const tags = computed(() => {
  const allTags = posts.map(post => post.tags).flat()
  return [...new Set(allTags)]
})


</script>

<template>
  <Page class="my-8">
    <div class="bg-white">
      <PostList :posts="posts"/>
    </div>
    <template #right>
      <nav
          class="group -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 space-y-3">
        <Author/>
        <div class="bg-white border border-[#f5f6f7] rounded p-2.5 overflow-hidden text-[#18191a]">
          <h2 class="title">分类</h2>
          <ul>
            <li v-for="(c, index) in categories" :key="c" class="text-sm leading-tight">
              <a href="" class="flex px-[7px] py-2.5 justify-between items-center">{{c}}</a>
            </li>
          </ul>
        </div>
        <div class="bg-white border border-[#f5f6f7] rounded p-2.5 overflow-hidden text-[#18191a]">
          <h2 class="title">标签</h2>
        </div>
      </nav>
    </template>
  </Page>
</template>

<style scoped>
.title {
  @apply relative pl-10 mb-1.5 pb-4 text-base font-semibold text-[#18191a] flex items-center gap-0.5 border-b border-gray-200
  before:content-[''] before:absolute before:w-3 before:h-3 before:transform-none before:rounded-full before:top-1.5 before:left-5 before:bg-[#fc625d]
  after:content-[''] after:absolute after:w-3 after:h-3 after:transform-none after:rounded-full after:top-1.5 after:left-[5px] after:bg-[#fdbc40];
}
</style>
