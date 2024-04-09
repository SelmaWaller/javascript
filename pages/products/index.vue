<script setup lang="ts">
  useHead({title: 'Nuxt test | Products'})
  // fetch products
  import ProductCard from "~/components/ProductCard.vue";

  const { data: products } = await useFetch('https://fakestoreapi.com/products')
  definePageMeta({
    layout: 'products'
  })
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in products">
      <ProductCard :product="p" />
    </div>
  </div>
</template>

<style scoped>

</style>