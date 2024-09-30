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
      <a href="#GameDev">Game Developer</a>
      <a href="#Studies">Studies</a>
    </div>
    <div>
      <a href="#Web">Full-Stack Developer</a>
      <a href="#Other">Other</a>
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
  cursor: default;
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

.timelines-years > li {
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
.legend div {
  display: flex;
}
.legend a {
  font-weight: normal;
  font-size: 11px;
  position: relative;
  margin: 0 1.5rem;
}

.legend a::before {
  width: 120%;
  background-color: #dd3d01;

  position: absolute;
  left: 0;
  top: 15px;
  height: v-bind("lineHeight");
  border-radius: v-bind("lineHeight");
  content: "";
}

.legend > div > a {
  transition: var(--transition-1);
}
.legend > div:first-child > a:first-child:hover {
  color: #dd3d01;
}

.legend > div:first-child > a:first-child::before {
  background: #dd3d01;
}

.legend > div:first-child > a:last-child:hover {
  color: #ff9704;
}

.legend > div:first-child > a:last-child::before {
  background: #ff9704;
}

.legend > div:last-child > a:first-child:hover {
  color: #56c2f3;
}

.legend > div:last-child > a:first-child::before {
  background: #56c2f3;
}

.legend > div:last-child > a:last-child:hover {
  color: #c2e34e;
}

.legend > div:last-child > a:last-child::before {
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
