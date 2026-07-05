<script setup>
defineProps({
  page: String,
  title: String,
});
</script>

<template>
  <article class="container section" :data-page="page">
    <header class="pb-3">
      <h2 class="h2 section-title">{{ title }}</h2>
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
