<script setup>
 //const { data } = await useFetch('/api/example?name=mario', {
 //  method: 'post',
 //  body: { age: 30 }
 //})
 
 const { data } = await useFetch('/api/currency/NOK')
</script>

<template>
  <div>
    <h2>About</h2>
    <div>
      {{ data }}
    </div>
  </div>
</template>

<style scoped>

</style>