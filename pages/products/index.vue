<script setup lang="ts">
  // fetch products
  const { data: products } = await useFetch('https://fakestoreapi.com/products')
  
  definePageMeta({
    layout: 'products'
  })
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in products">
      <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>