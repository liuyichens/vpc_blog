<script setup>
import PostItem from './PostItem.vue'

defineProps({
  posts: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="post-list">
    <PostItem
      v-for="(post, index) in posts" :key="post.url" :title="post.title"
      :excerpt="post.excerpt" :url="post.url" :date="post.date"
      :image="post.image" class="slide-enter" :style="{
        '--enter-stage': index,
        '--enter-step': '60ms',
      }"
    />
  </div>
</template>

<style scoped>

</style>
