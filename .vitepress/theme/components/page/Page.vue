<script setup>
import {computed, useAttrs, useSlots, defineOptions} from "vue";
const slots = useSlots()
const attrs = useAttrs()
const config = {
  wrapper: 'flex flex-col lg:grid lg:grid-cols-10 lg:gap-8',
  left: 'lg:col-span-2',
  center: {
    narrow: 'lg:col-span-6',
    base: 'lg:col-span-8',
    full: 'lg:col-span-10'
  },
  right: 'lg:col-span-2 order-first lg:order-last'
}


defineOptions({
  inheritAttrs: false
})

const centerClass = computed(() => {
  if (slots.left && slots.right) {
    return config.center.narrow
  } else if (slots.left || slots.right) {
    return config.center.base
  }
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
