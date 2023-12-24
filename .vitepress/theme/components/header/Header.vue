<script setup>
import HeaderLogo from "./HeaderLogo.vue";
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
import VPNavBarMenu from 'vitepress/dist/client/theme-default/components/VPNavBarMenu.vue'
import VPNavBarAppearance from 'vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue'
</script>

<template>
  <el-header class="app-header"  height="var(--header-height)">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]">
      <div class="left flex items-center ">
        <HeaderLogo/>
        <VPNavBarMenu class="header-nav-menu"/>
      </div>
      <div class="right flex items-center gap-6">
        <VPNavBarSearch/>
        <VPNavBarAppearance/>
      </div>
    </div>
  </el-header>
</template>


<style scoped>
.app-header {
  @apply border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50;
  background-image: radial-gradient(transparent, 1px, var(--body-background));
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  -webkit-backdrop-filter: saturate(50%) blur(4px);
}
</style>

<style>
.header-nav-menu .visually-hidden{
  display: none !important;
}
</style>
