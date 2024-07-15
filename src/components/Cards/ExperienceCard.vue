<script setup>
import { onBeforeMount } from "vue";

const props = defineProps({
  pOrganization: String,
  pDescription: String,
  pStart: Date,
  pEnd: Date,
  pLink: String,
});

var months;
onBeforeMount(() => {
  const startDate = new Date(props.pStart);
  const endDate = new Date(props.pEnd);
  var diff = (startDate.getTime() - endDate.getTime()) / 1000;
  diff /= 60 * 60 * 24 * 7 * 4;
  months = Math.abs(Math.round(diff));

});
</script>

<template>
  <li class="timeline-item">

    <h4 class="h4 timeline-item-title">{{ pOrganization }}</h4>

    <span>{{ pStart }} - {{ pEnd }}<br />{{ months }} Months</span>

    <p class="timeline-text">
      {{ pDescription }}
    </p>
    <div class="link-holder">
      <a href="{{pLink}}" class="card-link pt-3">See Projects</a>
    </div>
  </li>

<!--  <div class="col-12 col-lg-6 mb-4">-->
<!--    <div class="card cCard">-->
<!--      <div class="card-body">-->
<!--        <div>-->
<!--          <h5 class="card-title">{{ pOrganization }}</h5>-->
<!--          <h6 class="card-subtitle mb-2 text-muted">-->
<!--            {{ pStart }} - {{ pEnd }}<br />{{ months }} Months-->
<!--          </h6>-->
<!--          <p class="card-text">{{ pDescription }}</p>-->
<!--        </div>-->
<!--        <div class="link-holder">-->
<!--          <a href="{{pLink}}" class="card-link pt-3">See Projects</a>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<style scoped>
.card-link {
  text-align: end;
  display: block;
  color: var(--highlight);
  margin-top: auto;
  transition: var(--transition-1);
}
.card-link:hover {
  transition: var(--transition-1);
  color: var(--mid);
}


.timeline-item { position: relative; }

.timeline-item:not(:last-child) { margin-bottom: 20px; }

.timeline-item-title {
  font-size: var(--fs-6);
  line-height: 1.3;
  margin-bottom: 7px;
}

.timeline-list span {
  color: var(--vegas-gold);
  font-weight: var(--fw-400);
  line-height: 1.6;
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
  top: 5px;
  left: -33px;
  height: 6px;
  width: 6px;
  background: var(--text-gradient-yellow);
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--jet);
}

.timeline-text {
  color: var(--light-gray);
  font-weight: var(--fw-300);
  line-height: 1.6;
}


</style>
