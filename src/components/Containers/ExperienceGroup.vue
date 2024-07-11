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
  <outer-frame>
    <!--  <div class="-->
    <!--  -->
    <!--  job row mb-4 py-4 px-4 px-sm-5">-->
    <h2 class="mb-4">{{ pTitle }}</h2>
    <div class="row p-4 mb-4 text-justify mx-auto">
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
    <!--  </div>-->
  </outer-frame>
</template>

<style scoped>
outer-frame {
  padding: 2rem 3rem;
  background-color: #2f3136;
  border-radius: 10px;
  margin: 0;
}

h2 {
  margin-bottom: 0.5rem;
  font-weight: bolder;
}

h3 {
  margin-bottom: 0.2rem;
  font-weight: 600;
}

h4 {
  margin-bottom: 0.2rem;
  font-weight: 300;
}

p {
  margin-bottom: 1rem;
}
</style>
