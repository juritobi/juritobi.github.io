<script setup>
defineProps({
  pTitle: String,
  pSkills: [],
});
</script>

<template>
  <h4 class="pb-2 text-center">{{ pTitle }}</h4>
  <ul class="skills-list pb-4 m-0">
    <li v-for="skill in pSkills" :key="skill" :value="skill">{{ skill }}</li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
}

li {
  padding: 0.5rem 1.3rem;
  background-color: #101721;
  border-radius: 100px;
  color: #f5f5f5;
  text-decoration: none;
  border: solid;
  border-width: 1px 2px 5px;
  border-color: #949394;
  margin: 0.2rem 0.2rem 0.2rem 0.5em;
}

li * {
  margin: 0;
}
</style>
