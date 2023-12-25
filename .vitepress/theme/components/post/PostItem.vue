<script setup>
import { computed, onBeforeUnmount, onMounted } from 'vue'
import LazyLoad from 'vanilla-lazyload'

const props = defineProps({
  title: {
    type: String,
  },
  excerpt: {
    type: String,
  },
  date: {
    type: Object,
  },
  url: {
    type: String,
  },
  image: {
    type: String,
  },
})

const imgUrls = [
  'https://picsum.photos/id/20/367/267',
  'https://picsum.photos/id/24/367/267',
  'https://picsum.photos/id/25/367/267',
  'https://picsum.photos/id/0/367/267',
  'https://picsum.photos/id/42/367/267',
  'https://picsum.photos/id/48/367/267',
  'https://picsum.photos/id/36/367/267',
  'https://picsum.photos/id/39/367/267',
  'https://picsum.photos/id/119/367/267',
  'https://picsum.photos/id/160/367/267',
  'https://picsum.photos/id/201/367/267',
]

const showImgUrl = computed(() => {
  const randomIndex = Math.floor(Math.random() * imgUrls.length)
  return props.image || imgUrls[randomIndex]
})

const lazyLoadInstance = new LazyLoad({
  // css属性选择器
  elements_selector: 'img',
  // 滚动多少加载
  threshold: 0,
  // 加载的元素URL的属性
  data_src: 'lazy-src',
})

onMounted(() => {
  lazyLoadInstance.update()
})

onBeforeUnmount(() => {
  lazyLoadInstance.destroy()
})
</script>

<template>
  <div class="relative flex gap-5 border-b p-3.5 duration-300  border-gray-200 dark:border-gray-700">
    <div class="post-left relative flex-1">
      <el-link :underline="false" :href="url" class="absolute top-0 left-0 w-full h-full overflow-hidden rounded">
        <img src="/img/img-loading.svg" class="object-cover w-full h-full" :data-lazy-src="showImgUrl" alt="">
      </el-link>
    </div>
    <div class="flex flex-[2.5_2.5_0%] flex-col justify-between w-0 flex-shrink-0">
      <h2 class="post-title box-border overflow-hidden">
        <el-link :href="url" class="font-medium text-xl text-[var(--text-color)] hover:text-[var(--primary-color-hover)] transition-colors duration-300">
          {{ title }}
        </el-link>
      </h2>
      <div class="post-excerpt text-[var(--text-color)]" v-html="excerpt" />
      <div class="post-meta flex text-sm justify-between">
        <div class="text-[var(--text-color-secondary)]">
          {{ date.string }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-left {
  @apply before:content-[''] before:block before:pt-[60%];
}

.post-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.post-title a {
  @apply after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:border-b
  after:border-b-transparent after:duration-300
  hover:after:border-b-[var(--pairmary-color-hover)];
}

.post-excerpt {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 15px;
  line-height: 1.625;
}
</style>
