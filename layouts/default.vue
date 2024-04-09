<script setup lang="ts">

</script>

<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">Home</NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/products/uncaught-error">(Browser error test)</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #fa9c20;
}
</style>