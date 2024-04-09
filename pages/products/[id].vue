<script setup>
 const { id } = useRoute().params
 const uri = 'https://fakestoreapi.com/products/' + id

 //fetch product
// const { data: product } = await useFetch(uri, { key: id })
 const { data: product } = await useFetch(uri)
 
 definePageMeta({
   layout: 'products'
 })
</script>

<template>
  <div>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
  </div>
</template>

<style scoped>

</style>