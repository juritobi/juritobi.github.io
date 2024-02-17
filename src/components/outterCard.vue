<script setup></script>

<template>
  <div class="row p-4 my-4 text-justify mx-auto">
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  padding: 2rem 3rem;
  background-color: #2f3136;
  border-radius: 10px;
  margin: 0;
}

div h1 {
  margin-bottom: 0.2rem;
}

div h2 {
  margin-bottom: 1.5rem;
}

div p {
  margin-bottom: 1rem;
}
</style>
