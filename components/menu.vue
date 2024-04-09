<script setup lang="ts">

</script>

<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">Home</NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/Products">Products</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  .router-link-exact-active {
      color: #28487d;
    }
</style>