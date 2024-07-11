<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div class="row">
    <h2 class="sec-title">
      <i class="fas fa-address-card me-4"></i>{{ title }}
    </h2>
  </div>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.sec-title {
  margin-top: 0;
  padding: 1em 0;
  background-color: #202225;
  text-align: center;
  font-weight: bold;
}
</style>
