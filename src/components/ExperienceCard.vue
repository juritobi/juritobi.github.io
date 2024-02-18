<script setup>
defineProps({
  pOrganization: String,
  pDescription: String,
  pStart: Date,
  pEnd: Date,
  pLink: String,
});
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ pOrganization }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ pStart }} - {{ pEnd }}<br />1 year
      </h6>
      <p class="card-text">{{ pDescription }}</p>
      <a href="{{pLink}}" class="card-link float-end">See Projects</a>
    </div>
  </div>
</template>

<style scoped>
.card{
  max-width: 400px;
}
.card {
  border-radius: 1rem;
  background-color: #101721;
  border: solid;
  border-width: 1px 2px 5px;
  border-color: #949394;
}
.card-link {
  text-align: end;
  display: block;
  font-weight: 700;
  color: rgb(122, 199, 225);
  width: 100%;
}
</style>
