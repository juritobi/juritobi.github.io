<script setup>
import json from "../../assets/db.json";
import HorizontalTimeLine from "../HorizontalTimeLine.vue";
import ExperienceGroup from "@/components/Containers/ExperienceGroup.vue";

import {
  ref,
  onMounted,
  onBeforeMount,
  onUnmounted,
  getCurrentInstance,
} from "vue";
import SectionLayout from "@/components/layouts/SectionLayout.vue";

let firstDate = new Date(json[0].start);
let finalDate = new Date().getFullYear() + 1;
let years = finalDate - firstDate.getFullYear();

let containerWidth = ref(900);
let monthSize = ref(containerWidth.value / years / 12);
let yearSize = ref(containerWidth.value / years);

const instance = getCurrentInstance();
const tl = ref();
const mainContainer = ref(null);

onBeforeMount(() => {
  window.addEventListener("resize", windowResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", windowResize);
});

onMounted(() => {
  windowResize();
});

function windowResize() {
  containerWidth.value = mainContainer.value.clientWidth;
  monthSize.value = containerWidth.value / years / 12;
  yearSize.value = containerWidth.value / years;

  for (let i = 0; i < json.length; i++) {
    //add start and length in pixels
    let end = json[i].end != null ? new Date(json[i].end) : new Date();
    let start = new Date(json[i].start);

    json[i].length =
      ((end.getFullYear() - start.getFullYear()) * 12 -
        start.getMonth() +
        end.getMonth()) *
      monthSize.value;

    json[i].tlSrtart =
      ((start.getFullYear() - firstDate.getFullYear()) * 12 +
        start.getMonth()) *
      monthSize.value;

    switch (json[i].Role) {
      case "Studies":
        json[i].color = "#ff9704";
        json[i].markerClass = "markerTop";
        json[i].yPos = "-55px";
        break;
      case "Game Development":
        json[i].color = "#dd3d01";
        json[i].markerClass = "markerTop";
        json[i].yPos = "-75px";
        break;
      case "Web Development":
        json[i].color = "#56c2f3";
        json[i].markerClass = "markerBot";
        json[i].yPos = "20px";
        break;
      default:
        json[i].color = "#c2e34e";
        json[i].markerClass = "markerBot";
        json[i].yPos = "50px";
        break;
    }
  }
  tl.value.methodThatForcesUpdate();
  instance?.proxy?.$forceUpdate();
}
</script>

<template>
  <section-layout p-data="experience" p-title="Experience" id="Experience">
    <div class="row timeline m-0 d-none d-lg-block">
      <div ref="mainContainer" class="m-0 p-0 row">
        <HorizontalTimeLine
          ref="tl"
          :pYears="years"
          :pYearSize="yearSize"
          :pFisrtDate="firstDate"
          :pJson="json"
        >
        </HorizontalTimeLine>
      </div>
    </div>

    <ExperienceGroup
      id="GameDev"
      p-title="Game Development"
      p-icon="gamepad"
      :p-json="json"
      p-color="#dd3d01"
    ></ExperienceGroup>
    <ExperienceGroup
      id="Studies"
      pTitle="Studies"
      p-icon="graduation-cap"
      :pJson="json"
      p-color="#ff9704"
    ></ExperienceGroup>
    <ExperienceGroup
      id="Web"
      p-title="Web Development"
      :p-icon="['fab', 'html5']"
      :p-json="json"
      p-color="#56c2f3"
    ></ExperienceGroup>
    <ExperienceGroup
      id="Other"
      p-title="Other"
      p-icon="pencil"
      :p-json="json"
      p-color="#c2e34e"
    ></ExperienceGroup>
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
