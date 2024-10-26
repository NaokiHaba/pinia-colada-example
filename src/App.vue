<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">ホーム</RouterLink>
    |
    <RouterLink to="/usequerysample">useQueryサンプル</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>