<script setup>
import {computed, ref} from 'vue'
import PostList from "../post/PostList.vue";
import Page from '../page/Page.vue'
import Author from "../aside/Author.vue";
import AsideBox from "../aside/AsideBox.vue";
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
        <Author class="slide-enter"/>
        <AsideBox title="分类" class="slide-enter">
          <ul>
            <li v-for="(c, index) in categories" :key="c" class="text-sm leading-tight">
              <a href="" class="flex px-[7px] py-2.5 justify-between items-center">{{c}}</a>
            </li>
          </ul>
        </AsideBox>
        <AsideBox title="标签" class="slide-enter">
          <ul>
            <li v-for="(t, index) in tags" :key="t" class="text-sm leading-tight">
              <a href="" class="flex px-[7px] py-2.5 justify-between items-center">{{t}}</a>
            </li>
          </ul>
        </AsideBox>
      </nav>
    </template>
  </Page>
</template>

<style scoped>

</style>
