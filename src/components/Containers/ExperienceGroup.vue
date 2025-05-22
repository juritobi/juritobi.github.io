<script setup>
import ExperienceCard from "@/components/Cards/ExperienceCard.vue";
import { onMounted, ref } from "vue";
import json from "@/assets/db.json";

const props = defineProps({
  pTitle: String,
  pIcon: [],
  pJson: Array,
  pColor: String,
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
  <section class="experience-group">
    <div class="title-wrapper">
      <div class="icon-box">
        <fa-icon :icon="pIcon" />
      </div>
      <h3 class="h3">{{ pTitle }}</h3>
    </div>
    <ol class="timeline-list">
      <ExperienceCard
        v-for="i in finalList.slice().reverse()"
        :key="i"
        :p-organization="i.Organization"
        :p-description="i.Descirption"
        :p-end="i.end"
        :p-start="i.start"
        :p-link="i.Link"
        :p-colot="pColor"
      ></ExperienceCard>
    </ol>
  </section>
</template>

<style scoped>
.experience-group {
  margin-top: 30px;
}
.experience-group .title-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 1rem;
}

.timeline-list {
  font-size: var(--fs-6);
  margin-left: 1rem;
}
ol {
  margin: 0;
}

.icon-box {
  position: relative;
  background: var(--border-gradient-onyx);
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: v-bind(pColor);
  box-shadow: var(--shadow-1);
  z-index: 1;
}
.icon-box::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--eerie-black-1);
  border-radius: inherit;
  z-index: -1;
}
h3{
  /*color: v-bind(pColor);*/
}
</style>
