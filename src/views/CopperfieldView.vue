<script setup>
import SectionLayout from "@/components/layouts/SectionLayout.vue";
import DetailLayout from "@/components/layouts/DetailLayout.vue";
</script>

<template>
  <DetailLayout
    p-title="Copperfield Engine"
    p-data="Katto"
    p-subtitle="Implementation details and decisions"
  >
    <p></p>
  </DetailLayout>
  <SectionLayout p-title="Physics" p-data="Physics">
    <p></p>
  </SectionLayout>
</template>

<style scoped>
p {
  margin: 0 0 0.8rem 0;
}
li {
  list-style: disc;
  padding-bottom: 0.8rem;
}
.challenge {
  position: relative;
  width: fit-content;
  padding-top: 1rem;
}
.challenge::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--highlight);
  border-radius: 5px;
}
</style>
