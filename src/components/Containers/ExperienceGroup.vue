<script setup>
import ExperienceCard from "@/components/Cards/ExperienceCard.vue";
import { onMounted, ref } from "vue";
import json from "@/assets/db.json";
import OuterFrame from "@/components/Containers/OuterFrame.vue";

const props = defineProps({
  pTitle: String,
  pJson: Array,
});

let finalList = ref([]);

onMounted(() => {
  if (props.pTitle !== "Other") {
    for (let i = 0; i < json.length; i++) {
      if (json[i].Role === props.pTitle) {
        finalList.value.push(json[i]);
      }
    }
  } else {
    for (let i = 0; i < json.length; i++) {
      if (
        json[i].Role !== "Game Development" &&
        json[i].Role !== "Studies" &&
        json[i].Role !== "Web Development"
      ) {
        finalList.value.push(json[i]);
      }
    }
  }
});
</script>

<template>
  <h3 class="h3 mt-4 mb-0">{{ pTitle }}</h3>
  <div class="row pt-4 text-justify mx-auto">
    <ExperienceCard
      v-for="i in finalList"
      :key="i"
      :p-organization="i.Organization"
      :p-description="i.Descirption"
      :p-end="i.start"
      :p-start="i.end"
      :p-link="i.Link"
    ></ExperienceCard>
  </div>
</template>

<style scoped>
</style>
