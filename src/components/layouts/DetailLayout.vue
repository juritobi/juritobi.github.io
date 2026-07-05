<script setup>
defineProps({
  page: String,
  title: String,
  subtitle: String,
});
</script>

<template>
  <!--navbar-->
  <article class="container section" :data-page="page">
    <header class="pb-3">
      <h2 class="">{{ title }}</h2>
      <h4 v-if="subtitle" class="section-title pb-3 fw-light">{{ subtitle }}</h4>
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
  width: 5rem;
  height: 3px;
  background: var(--text-gradient-yellow);
  border-radius: 3px;
}
</style>
