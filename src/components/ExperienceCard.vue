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
  var diff = (props.pEnd - props.pStart) / 1000;
  diff /= 60 * 60 * 24 * 7 * 4;
  months = Math.abs(Math.round(diff));

});
</script>

<template>
  <div class="col-12 col-lg-6 mb-4">
    <div class="card cCard">
      <div class="card-body">
        <div>
          <h5 class="card-title">{{ pOrganization }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {{ pStart }} - {{ pEnd }}<br />1 year
          </h6>
          <p class="card-text">{{ pDescription }}</p>
        </div>
        <div class="link-holder">
          <a href="{{pLink}}" class="card-link pt-3">See Projects</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cCard {
  border-radius: 1rem;
  background-color: #101721;
  border: solid;
  border-width: 1px 2px 5px;
  border-color: #949394;
  min-height: 100%;
}
.card-body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-link {
  text-align: end;
  display: block;
  font-weight: 700;
  color: rgb(122, 199, 225);
  margin-top: auto;
}
</style>
