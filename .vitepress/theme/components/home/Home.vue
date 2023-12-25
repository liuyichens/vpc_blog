<script setup>
import { computed, ref } from 'vue'
import PostList from "../post/PostList.vue";
import Page from '../page/Page.vue'
import Author from "../aside/Author.vue";
import AsideBox from "../aside/AsideBox.vue";
import Tips from "../tip/Tips.vue";
import { data as posts } from '../../scripts/posts.data'

const categories = computed(() => {
  const allCategory = posts.map(post => post.category).flat()
  return [...new Set(allCategory)]
})
const tags = computed(() => {
  const allTags = posts.map(post => post.tags).flat()
  return [...new Set(allTags)]
})

const activeTab = ref(0)

function toggleTab(index) {
  activeTab.value = index
}

const headerTitleList = [
  '文章', 'Tips'
]

const activeName = computed(() => {
  return headerTitleList[activeTab.value]
})

</script>

<template>
  <Page class="my-8 mt-1">
    <div class="bg-white dark:bg-contentbg dark:text-white rounded overflow-hidden">
      <div class="home-header overflow-auto whitespace-nowrap text-xl p-5 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex gap-2.5 text-[#18191a] dark:text-white">
          <li v-for="(title, index) in headerTitleList"
            :class="['relative flex-shrink-0 cursor-pointer', { 'active': activeTab === index }]" @click="toggleTab(index)">
            {{ title }}
          </li>
        </ul>
      </div>
      <PostList :posts="posts" v-show="activeName === '文章'" />
      <Tips v-show="activeName === 'Tips'" />
    </div>
    <template #right>
      <nav class="group -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 space-y-3">
        <Author class="slide-enter" />
        <AsideBox title="分类" class="slide-enter">
          <ul>
            <li v-for="(c, index) in categories" :key="c" class="text-sm leading-tight">
              <a href="" class="flex px-[7px] py-2.5 justify-between items-center">{{ c }}</a>
            </li>
          </ul>
        </AsideBox>
        <AsideBox title="标签" class="slide-enter">
          <ul>
            <li v-for="(t, index) in tags" :key="t" class="text-sm leading-tight">
              <a href="" class="flex px-[7px] py-2.5 justify-between items-center">{{ t }}</a>
            </li>
          </ul>
        </AsideBox>
      </nav>
    </template>
  </Page>
</template>

<style scoped></style>
