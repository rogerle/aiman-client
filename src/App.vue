<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from "vuex"

const store = useStore()
console.log('storage',store.state.user)
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
