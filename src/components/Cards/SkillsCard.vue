<script setup>
defineProps({
  pTitle: String,
});
</script>

<template>
  <h3>{{ pTitle }}</h3>
  <div class="content-card mb-4">
    <slot></slot>
  </div>
</template>

<style scoped>
.content-card {
  position: relative;
  background: var(--border-gradient-onyx);
  padding: 1.5rem 1rem 0;
  border-radius: 1rem;
  box-shadow: var(--shadow-2);
  z-index: 1;
}

.content-card::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
}
</style>
