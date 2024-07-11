<script setup>
defineProps({
  pYears: Number,
  pYearSize: Number,
  pFisrtDate: Date,

  pJson: Array,
});

import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();

const lineHeight = "12px";

function methodThatForcesUpdate() {
  instance?.proxy?.$forceUpdate();
}

defineExpose({
  methodThatForcesUpdate,
});
</script>

<template>
  <h1>Timeline</h1>
  <div class="legend">
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
    <li v-for="i in pYears" :key="i" :style="{ width: pYearSize + 'px' }">
      {{ i + pFisrtDate.getFullYear() - 1 }}
    </li>

    <ul class="timeline-events">
      <li
        v-for="item in pJson"
        :key="item"
        class="timeline-event"
        :style="{ left: item.tlSrtart + 'px', top: item.yPos }"
      >
        <div
          :class="['marker', item.markerClass]"
          :style="{ width: item.length + 'px', backgroundColor: item.color }"
        ></div>
        <h4>{{ item.Organization }}</h4>
      </li>
    </ul>
  </ul>
</template>

<style scoped>

.timeline h1 {
  text-align: center;
  color: #fff;
  margin: 0 0 100px;
}

.timelines-years > li {
  position: relative;
  top: -6px;
  display: inline-block;
  width: calc(v-bind("pYearSize"));
  color: #868686;
  font-size: 11px;
  line-height: 11px;
  text-indent: -12px;
}

.timeline-events h2,
.timeline-events h3,
.timeline-events h4 {
  margin: 0 0 1px 0;
  font-weight: normal;
  font-size: 11px;
}

.timeline-events h2 {
  color: #777;
  text-transform: uppercase;
}

.timeline-events h4 {
  color: #fff;
  font-style: italic;
}

.timeline-events li {
  display: inline-block;
}

.timeline-events li:before {
  position: absolute;
  left: 0;
  top: -15px;
  height: v-bind("lineHeight");
  border-radius: v-bind("lineHeight");
  content: "";
}

.timelines-years {
  padding: 0 0 0 0;
  width: auto;
  margin: auto;
  white-space: nowrap;
  border-top: 1px solid #282828;
  list-style: none;
  font-size: 0;
  height: 120px;
}

.timelines-years>li {
  position: relative;
  top: -6px;
  display: inline-block;
  width: calc(var(--grid-width));
  color: #868686;
  font-size: 11px;
  line-height: 11px;
  text-indent: -12px;
}

.timeline-events {
  position: relative;
  padding: 0;
  list-style: none;
  white-space: nowrap;
  font-size: 0;
}

.timeline-event {
  position: absolute;
  top: 0;
  left: 30px;
}

.legend {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
}
.legend div{
  display: flex;
}
.legend span {
  font-weight: normal;
  font-size: 11px;
  position: relative;
  margin: 0 1.5rem;
}

.legend span::before {
  width: 120%;
  background-color: #dd3d01;

  position: absolute;
  left: 0;
  top: 15px;
  height: v-bind("lineHeight");
  border-radius: v-bind("lineHeight");
  content: "";
}

.legend > div:first-child > span:first-child {
  color: #dd3d01;
}

.legend > div:first-child > span:first-child::before {
  background: #dd3d01;
}

.legend > div:first-child > span:last-child {
  color: #ff9704;
}

.legend > div:first-child > span:last-child::before {
  background: #ff9704;
}

.legend > div:last-child > span:first-child {
  color: #56c2f3;
}

.legend > div:last-child > span:first-child::before {
  background: #56c2f3;
}

.legend > div:last-child > span:last-child {
  color: #c2e34e;
}

.legend > div:last-child > span:last-child::before {
  background: #c2e34e;
}
.marker {
  position: absolute;
  height: 12px;
  border-radius: 100px;
}
.markerTop {
  top: 15px;
}
.markerBot {
  top: -15px;
}
</style>
