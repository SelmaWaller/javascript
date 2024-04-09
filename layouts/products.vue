<script setup lang="ts">

</script>

<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">Shop</NuxtLink>
        <button class="btn">Cart</button>
    </nav>
  </header>
  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.router-link-exact-active {
  color: #28487d;
}
</style>