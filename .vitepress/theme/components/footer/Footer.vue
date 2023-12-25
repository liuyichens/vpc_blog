<script setup>

</script>

<template>
  <div class="footer-wave w-full h-10 relative z-10 overflow-hidden bg-[var(--layout-body-background)]">
    <svg
      class="editorial block w-full h-10 m-0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none"
    >
      <defs>
        <path
          id="core-wave" d="M-160 44c30 0
        58-18 88-18s
        58 18 88 18
        58-18 88-18
        58 18 88 18
        v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use xlink:href="#core-wave" x="50" y="0" fill="#6a7277" />
        <use xlink:href="#core-wave" x="50" y="3" fill="#3f4549" />
        <use xlink:href="#core-wave" x="50" y="6" fill="#22292d" />
      </g>
    </svg>
  </div>
  <el-footer class="relative bg-[#22292d]">
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3"
    >
      Footer
      <div class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center" />
    </div>
  </el-footer>
</template>

<style scoped>
.footer-wave .parallax > use:nth-child(1) {
  animation-delay: -2s;
}
.footer-wave .parallax > use:nth-child(2) {
  animation-delay: -2s;
  animation-duration: 5s;
}
.footer-wave .parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 3s;
}
.footer-wave .parallax > use {
  animation: move-forever 12s linear infinite;
}
@keyframes move-forever {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}
</style>
