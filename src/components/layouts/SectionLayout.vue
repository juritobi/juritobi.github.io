<script setup>
defineProps({
  pData: String,
  pTitle: String,
});
</script>

<template>
  <article class="container section" :data-page="pData">
    <header class="pb-3">
      <h2 class="h2 article-title">{{ pTitle }}</h2>
    </header>
    <slot></slot>
  </article>
</template>

<style scoped></style>
