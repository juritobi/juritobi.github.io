<script setup>
import { inject } from "vue";
defineProps({
  title: String,
});
const selectedTitle = inject("selectedTitle");
</script>

<template>
  <div
    class="tabs-content row mb-4 text-justify mx-auto"
    v-show="selectedTitle === title"
  >
    <slot />
  </div>
</template>

<style scoped>
</style>
