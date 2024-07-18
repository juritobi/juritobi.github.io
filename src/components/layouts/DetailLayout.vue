<script setup>
defineProps({
  pData: String,
  pTitle: String,
  pSubtitle: String,
});
</script>

<template>
  <!--navbar-->
  <article class="container section" :data-page="pData">
    <header class="pb-3">
      <h2 class="">{{ pTitle }}</h2>
      <h4 v-if="pSubtitle" class="section-title pb-3 fw-light">{{ pSubtitle }}</h4>
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
