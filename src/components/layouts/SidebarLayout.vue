<script setup>
import Sidebar from "@/components/Headers/Sidebar.vue";
</script>

<template>
  <main class="relative">
    <Sidebar></Sidebar>
    <div class="main-content">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped></style>
