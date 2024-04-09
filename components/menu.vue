<script setup lang="ts">

</script>

<template>
  <header>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/Products">Products</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  .router-link {
    &-active {
      font-weight: bold;
      color: red;
    }
  }
</style>