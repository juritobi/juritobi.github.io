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
  DetailsLink: Boolean,
});
</script>

<template>
  <div class="col-12 col-md-6 col-xl-4 mb-4">
    <div class="card cCard">
      <img class="card-img-top" :src="image" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="sub">{{ subTitle }}</h6>
        <div class="d-flex justify-content-between align-items-end">
          <div>
            <span class="legend">platform:</span>
            <h6>{{ platform }}</h6>
            <span class="legend">Language/Engine:</span>
            <h6>{{ language }}</h6>
            <span class="legend">Date:</span>
            <h6>{{ yearDate }}</h6>
          </div>

          <div>
            <a v-if="codeLink" :href="codeLink" class="card-link m-0">
              Source Code
            </a>
            <a v-if="VideoLink" :href="VideoLink" class="card-link m-0">
              Video
            </a>
            <a v-if="downloadLink" :href="downloadLink" class="card-link m-0">
              Play
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-title {
  margin-bottom: 0.2rem;
}
.legend {
  color: #aaa;
  font-size: 0.6rem;
  font-weight: 100;
}
.sub{
  line-height: 1rem;
}
h6 {
  line-height: 0.6rem;
  padding-bottom: 0.4rem;
  color: #fff;
}

.cCard {
  border-radius: 1rem;
  background: var(--onyx);
  border: solid;
  border-width: 0px 1px 3px;
  border-color: var(--jet);
}

.cCard img {
  border-radius: 1rem 1rem 0 0;
}

.card-link {
  text-align: end;
  display: block;
  color: var(--highlight);
  width: 100%;
  transition: var(--transition-1);
}

.card-link:hover {
  transition: var(--transition-1);
  color: var(--mid);
  cursor: pointer;
}

</style>
