<script setup>
defineProps({
  title: String
})
</script>

<template>
  <div class="row">
    <h2 class="sec-title"><i class="fas fa-address-card me-4"></i>{{title}}</h2>
  </div>
  <div class="container">
      <slot/>
  </div>
</template>

<style scoped>

</style>