<script setup>
defineProps({
  pTitle: String,
})
</script>

<template>
  <h3 class="h3">{{ pTitle }}</h3>
  <div class="content-card">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>