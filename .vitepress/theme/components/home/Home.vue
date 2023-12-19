<script setup>
import PostList from "../post/PostList.vue";
import Page from '../page/Page.vue'
</script>

<template>
  <Page class="my-8">
    <PostList/>
    <template #right>
      Right
    </template>
  </Page>
</template>

<style scoped>

</style>
