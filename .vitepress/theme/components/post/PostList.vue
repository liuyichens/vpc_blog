<script setup>
import {data as posts} from '../../scripts/posts.data'
import PostItem from './PostItem.vue'
</script>

<template>
  <div class="post-list bg-white">
    <PostItem v-for="post in posts" :key="post.url" :title="post.title"
              :excerpt="post.excerpt" :url="post.url" :date="post.date"
              :image="post.image"/>
  </div>
</template>

<style scoped>

</style>
