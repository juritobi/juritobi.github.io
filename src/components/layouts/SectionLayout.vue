<script setup>
defineProps({
  pData: String,
  pTitle: String,
});
</script>

<template>
  <article class="container section" :data-page="pData">
    <header class="pb-3">
      <h2 class="h2 section-title">{{ pTitle }}</h2>
    </header>
    <slot></slot>
  </article>
</template>

<style scoped>
.section-title {
  position: relative;
  padding-bottom: 7px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width:5rem;
  height: 3px;
  background: var(--text-gradient-yellow);
  border-radius: 3px;
}

</style>
