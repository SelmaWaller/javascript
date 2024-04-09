<script setup lang="ts">
 const { id } = useRoute().params

 definePageMeta({
   layout: 'products'
 })
</script>

<template>
  <div>
    <h2>Product details for {{ id }}</h2>
  </div>
</template>

<style scoped>

</style>