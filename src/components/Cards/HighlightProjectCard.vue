<script setup>
defineProps({
  id: String,
  title: String,
  subTitle: String,
  image: String,
  language: String,
  yearDate: Number,
  platform: String,
  downloadLink: String,
  codeLink: String,
  VideoLink: String,
});
</script>

<template>
  <div class="col-12 col-lg-6 mb-4">
    <div class="card cCard">
      <img class="card-img-top" :src="image" alt="Card image cap" />
      <div class="card-body">
        <h3 class="card-title">{{ title }}</h3>
        <h6 class="sub">{{ subTitle }}</h6>
        <div class="d-flex justify-content-between align-items-end">
          <div class="d-flex">
            <div class="pe-3">
              <span class="legend">platform:</span>
              <h6>{{ platform }}</h6>
            </div>
            <div class="pe-3">
              <span class="legend">Language/Engine:</span>
              <h6>{{ language }}</h6>
            </div>
            <div class="pe-3">
              <span class="legend">Date:</span>
              <h6>{{ yearDate }}</h6>
            </div>
          </div>

          <div>
            <a v-if="codeLink" :href="codeLink" class="card-link m-0"
              >Source Code</a
            >
            <a v-if="VideoLink" :href="VideoLink" class="card-link m-0"
              >Video</a
            >
            <a v-if="downloadLink" :href="downloadLink" class="card-link m-0"
              >Play</a
            >
            <router-link to="Copperfield"> More Details </router-link>
          </div>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sub {
  line-height: 0.5;
}
.card-title {
  margin-bottom: 0.2rem;
}
.legend {
  color: #aaa;
  font-size: 0.6rem;
  font-weight: 100;
}
h6 {
  line-height: 0.5rem;
  padding-bottom: 0.2rem;
  color: #fff;
}

.cCard {
  border-radius: 1rem;
  background-color: #101721;
  border: solid;
  border-width: 1px 2px 5px;
  border-color: #949394;
}

.cCard img {
  border-radius: 1rem 1rem 0 0;
}

.card-link {
  text-align: end;
  display: block;
  font-weight: 700;
  color: rgb(122, 199, 225);
  width: 100%;
}

.card-link:hover {
  color: rgb(122, 199, 225);
  text-decoration: underline;
  cursor: pointer;
}
</style>
