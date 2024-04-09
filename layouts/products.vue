<script setup lang="ts">
import {Menu} from '#components'
</script>

<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
      </nav>
    </header>
  </div>
  <div>
    <footer>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
  <div>
    <slot />
  </div>
</template>

<style scoped>

</style>