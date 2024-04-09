<script setup>
 import ProductDetails from '../../components/ProductDetails.vue'

 const { id } = useRoute().params
 const uri = 'https://fakestoreapi.com/products/' + id

 //fetch product
// const { data: product } = await useFetch(uri, { key: id })
 const { data: product } = await useFetch(uri)
 if (!product.value) {
   throw createError({statusCode: 404, statusMessage: 'Product not found', fatal: true})
 }
 
 definePageMeta({
   layout: 'products'
 })
</script>

<template>
  <div>
   <ProductDetails :product="product"/>
  </div>
</template>

<style scoped>

</style>