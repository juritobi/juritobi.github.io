<script setup>
import router from "@/router";

const props = defineProps({
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
  pHighLight: Boolean,
  pLink: String,
});

function navigate(){
  router.push(props.pLink);
}
</script>

<template>
  <div
    class="col-12 mb-4"
    :class="{
      highlight: pHighLight,
      'col-lg-6': pHighLight,
      'col-md-6': !pHighLight,
      'col-xl-4': !pHighLight,
    }"
  >
    <div class="experience-card">
      <img class="card-img-top" :src="image" alt="Card image cap" />
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>
        <h6 class="sub">{{ subTitle }}</h6>
        <div class="d-flex justify-content-between align-items-end">
          <div class="d-flex legend-container">
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
            <a v-if="codeLink" :href="codeLink" class="card-link m-0">
              Documentation
            </a>
            <a v-if="VideoLink" :href="VideoLink" class="card-link m-0">
              Video
            </a>
            <a v-if="downloadLink" :href="downloadLink" class="card-link m-0">
              Play
            </a>
            <!-- TODO: PDF SWAP -->
            <a v-if="pLink" v-on:click="navigate()" class="card-link m-0">
              In Depth Details
            </a>
          </div>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>

a{
  color: var(--highlight);
}
router-link{
  color: var(--highlight);
}

.experience-card {
  position: relative;
  background: var(--border-gradient-onyx-inverse);
  padding: 0;
  border-radius: 1rem;
  box-shadow: var(--shadow-2);
  z-index: 1;
}
.experience-card::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet-inverted);
  border-radius: inherit;
  z-index: -1;
}

.experience-card .card-content {
  padding: 1rem;
}
.experience-card img {
  border-radius: 1rem 1rem 0 0;
}
.experience-card a {
  text-align: end;
  display: block;
  color: var(--highlight);
  width: 100%;
  transition: var(--transition-1);
}

.experience-card a:hover {
  transition: var(--transition-1);
  color: var(--mid);
  cursor: pointer;
}

.experience-card .card-title {
  margin-bottom: 0.2rem;
}
.experience-card .legend {
  color: #aaa;
  font-size: 0.6rem;
  font-weight: 100;
}
.experience-card .sub {
  line-height: 1rem;
}
.experience-card h6 {
  line-height: 0.6rem;
  padding-bottom: 0.4rem;
  color: #fff;
}
.legend-container {
  flex-direction: column;
}
.highlight .legend-container {
  flex-direction: row;
}

@media (max-width: 576px) {
  .highlight .legend-container {
    flex-direction: column;
  }
}
</style>
