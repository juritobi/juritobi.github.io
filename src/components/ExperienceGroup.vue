<script setup>
import card from "../components/ExperienceCard.vue";
import json from "../assets/experience.json";
import { onBeforeMount } from "vue";

defineProps({
  Type: Number,
});

var group = [];

onBeforeMount(() => {
  windowResize();
});

function windowResize() {
  for (var i = 0; i < json.length; i++) {
    if (i == parseInt(Type)) group.push(i);
  }
}
</script>

<template>
  <template v-for="i in group">
    <card v-bind="json[i]" />
  </template>
</template>

<style scoped>
body {
  padding: 10px;
}

.nav-pills > li > a {
  border-radius: 4px 4px 0 0;
}

.tab-content {
  color: white;
  background-color: #428bca;
  padding: 5px 15px;
}
</style>
