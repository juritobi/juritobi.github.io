<script setup>
import AboutView from "./components/Sections/AboutSection.vue";
</script>

<template>


  <router-view />
</template>

<style>
body {
  background-color: #36393f;
  color: white;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
i,
a {
  color: #f5f5f5;
  margin: 0;
}

* {
  text-size-adjust: none;
}

a {
  text-decoration: none;
}

h1 {
  font-size: 2rem;
  font-weight: bolder;
}

h2 {
  font-size: 1.8rem;
  font-weight: 100;
}

h3 {
  font-size: 1.6rem;
}

h4 {
  font-size: 1rem;
}

h6 {
  font-weight: 200;
  color: #ccc;
}

p {
  font-size: 16px;
}

:root {
  --grid-background-color: rgb(15, 15, 15);
  --grid-line-color: #000;
  --month: 10px;
  --grid-width: 120px;
  --timeline-events-line-height: 12px;
}
</style>
