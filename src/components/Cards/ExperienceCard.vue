<script setup>
import { onBeforeMount } from "vue";

const props = defineProps({
  organization: String,
  description: String,
  start: Date,
  end: Date,
  link: String,
  color: String,
});

let startDateStr;
let endDateStr;
onBeforeMount(() => {
  const startDate = new Date(props.start);
  const endDate = new Date(props.end);

  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  startDateStr = `${shortMonths[startDate.getMonth()]} ${startDate.getFullYear()}`;
  endDateStr = `${shortMonths[endDate.getMonth()]} ${endDate.getFullYear()}`;

});
</script>

<template>
  <li class="timeline-item">
    <h4 class="h4 timeline-item-title">{{ organization }}</h4>

    <span>{{ startDateStr }} - {{ endDateStr }}</span>

    <p class="timeline-text">
      {{ description }}
    </p>
    <div class="link-holder">
      <!--      <a href="{{link}}" class="card-link pt-3">See Projects</a>-->
    </div>
  </li>
</template>

<style scoped>
.timeline-item {
  position: relative;
}

.timeline-item:not(:last-child) {
  margin-bottom: 20px;
}


.timeline-item-title {
  font-size: var(--fs-6);
  line-height: 1.5;
  margin-bottom: 5px;
  position: relative;
  width: fit-content;
}
.timeline-item-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: v-bind(color);
  border-radius: 5px;
}

.timeline-list span {
  color: var(--vegas-gold);
  font-weight: var(--fw-400);
  line-height: 1.2;
}

.timeline-item:not(:last-child)::before {
  content: "";
  position: absolute;
  top: -25px;
  left: -30px;
  width: 1px;
  height: calc(100% + 50px);
  background: var(--jet);
}

.timeline-item::after {
  content: "";
  position: absolute;
  top: 10px;
  left: -33px;
  height: 6px;
  width: 6px;
  background: v-bind(color);
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--jet);
}

.timeline-text {
  color: var(--light-gray);
  font-weight: var(--fw-300);
  line-height: 1.6;
}

</style>
