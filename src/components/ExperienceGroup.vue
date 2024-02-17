<script setup>
import card from "../components/ExperienceCard.vue";
import ExperienceCard from "@/components/ExperienceCard.vue";

defineProps({
  pTitle: String,
  pJson: Array,
});

</script>

<template>
  <div class="job mb-4 py-4 px-4 px-sm-5 row">
    <h2>{{pTitle}}</h2>
    <div class="card-hold d-flex justify-content-center flex-wrap">

      <ExperienceCard
      p-organization="Game"
      p-description="lorem ipsum sit amet jaja mo mese mas pero esto chuta que flipas lo tendre que sacar del json pero ya veremeos"
      p-end=""
      p-start=""
      p-link="juritobi.com"></ExperienceCard>


    </div>
  </div>
</template>

<style scoped>
body {
  padding: 10px;
}

.nav-pills > li > a {
  border-radius: 4px 4px 0 0;
}

.tab-content {
  color: white;
  background-color: #428bca;
  padding: 5px 15px;
}
</style>
