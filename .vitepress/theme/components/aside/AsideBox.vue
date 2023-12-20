<script setup>
defineProps({
  title: String
})
</script>

<template>
  <div class="bg-white dark:bg-contentbg border border-gray-200 dark:border-gray-700 rounded p-2.5 overflow-hidden text-[#18191a] dark:text-white">
    <h2 class="title">{{title}}</h2>
    <slot/>
  </div>
</template>

<style scoped>
.title {
  @apply relative pl-10 mb-1.5 pb-4 text-base font-semibold text-[#18191a] flex items-center gap-0.5 border-b border-gray-200 dark:border-gray-700 dark:text-white
  before:content-[''] before:absolute before:w-3 before:h-3 before:transform-none before:rounded-full before:top-1.5 before:left-5 before:bg-[#fc625d]
  after:content-[''] after:absolute after:w-3 after:h-3 after:transform-none after:rounded-full after:top-1.5 after:left-[5px] after:bg-[#fdbc40];
}
</style>
