<script setup>
</script>

<template>
  <el-main class="min-h-[calc(100vh-var(--header-height))] app-main">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
       <slot/>
    </div>
  </el-main>
</template>

<style scoped>
.app-main {
  @apply bg-[var(--layout-body-background)]
}
</style>
