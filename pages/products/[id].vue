<script setup lang="ts">
import Menu from "~/components/menu.vue";
 const { id } = useRoute().params
</script>

<template>
  <Menu />
  <h2>Product details for {{ id }}</h2>
</template>

<style scoped>

</style>