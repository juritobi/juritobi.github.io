<script setup>
var lineHeight = "12px";
defineProps({
  pYears: Number,
  pYearSize: Number,
  pFisrtDate: Date,

  pJson: Array
})

import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance();

function methodThatForcesUpdate(){
  instance?.proxy?.$forceUpdate();
};

defineExpose({
  methodThatForcesUpdate
});

</script>

<template>
  <h1>Timeline</h1>
  <div class="leyend">
    <div>
      <span>Game Developer</span>
      <span>Studies</span>
    </div>
    <div>
      <span>Full-Stack Developer</span>
      <span>Other</span>
    </div>
  </div>
  <ul class="timelines-years">
    <li v-for="i in pYears" :style="{ width: 133.33333333333334 + 'px' }">
      {{ i + pFisrtDate.getFullYear() - 1 }}
    </li>

    <ul class="timeline-events">
      <li v-for="(item) in pJson" class="timeline-event" :style="{ left: item.tlSrtart + 'px', top: item.yPos }">
        <div :class="['marker', item.markerClass]" :style="{ width: item.length + 'px', backgroundColor: item.color }"></div>
        <h4>{{ item.Organization }}</h4>
      </li>
    </ul>
  </ul>
</template>

<style scoped>
.marker {
  position:absolute;
  height: 12px;
  border-radius: 100px;
}
.markerTop {
  top:15px;
}
.markerBot {
  top:-15px;
}
</style>