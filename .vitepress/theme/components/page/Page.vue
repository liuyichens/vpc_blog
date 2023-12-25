<script setup>
import { computed, useAttrs, useSlots } from 'vue'

defineOptions({
  inheritAttrs: false,
})
const slots = useSlots()
const attrs = useAttrs()
const config = {
  wrapper: 'flex flex-col lg:grid lg:grid-cols-12 lg:gap-4',
  left: 'lg:col-span-3',
  center: {
    narrow: 'lg:col-span-6',
    base: 'lg:col-span-9',
    full: 'lg:col-span-12',
  },
  right: 'lg:col-span-3 hidden lg:block',
}

const centerClass = computed(() => {
  if (slots.left && slots.right)
    return config.center.narrow
  else if (slots.left || slots.right)
    return config.center.base

  return config.center.full
})
</script>

<template>
  <div :class="config.wrapper" v-bind="attrs">
    <div v-if="$slots.left" :class="config.left">
      <slot name="left" />
    </div>

    <div :class="centerClass">
      <slot />
    </div>

    <div v-if="$slots.right" :class="config.right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>

</style>
