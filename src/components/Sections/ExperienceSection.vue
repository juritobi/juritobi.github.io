<script setup>
import HorizontalTimeLine from "../HorizontalTimeLine.vue";
import ExperienceGroup from "@/components/Containers/ExperienceGroup.vue";
import { ref } from "vue";
import SectionLayout from "@/components/layouts/SectionLayout.vue";
import { useExperienceData } from "@/composables/useExperienceData";

const mainContainer = ref(null);

const { firstDate, years, yearSize, timelineItems, experienceGroups } =
  useExperienceData(mainContainer);
</script>

<template>
  <section-layout page="experience" title="Experience" id="Experience">
    <div class="row timeline m-0 d-none d-lg-block">
      <div ref="mainContainer" class="m-0 p-0 row">
        <HorizontalTimeLine
          :years="years"
          :year-size="yearSize"
          :first-date="firstDate"
          :items="timelineItems"
        />
      </div>
    </div>

    <ExperienceGroup
      v-for="group in experienceGroups"
      :key="group.id"
      :id="group.id"
      :title="group.title"
      :icon="group.icon"
      :items="group.items"
      :color="group.color"
    />
  </section-layout>
</template>

<style scoped>
.timeline {
  font-family: sans-serif;
  position: relative;
  width: 100%;
  padding: 2rem 1rem;
  background: rgb(15, 15, 15);
  border-radius: 10px;
}
</style>
