<script setup>
import ExperienceCard from "@/components/Cards/ExperienceCard.vue";

defineProps({
  title: String,
  icon: [],
  items: Array,
  color: String,
});
</script>

<template>
  <section class="experience-group">
    <div class="title-wrapper">
      <div class="icon-box">
        <fa-icon :icon="icon" />
      </div>
      <h3 class="h3">{{ title }}</h3>
    </div>
    <ol class="timeline-list">
      <ExperienceCard
        v-for="item in items.slice().reverse()"
        :key="item.id"
        :organization="item.organization"
        :description="item.description"
        :end="item.end"
        :start="item.start"
        :link="item.link"
        :color="color"
      ></ExperienceCard>
    </ol>
  </section>
</template>

<style scoped>
.experience-group {
  margin-top: 30px;
}
.experience-group .title-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 1rem;
}

.timeline-list {
  font-size: var(--fs-6);
  margin-left: 1rem;
}
ol {
  margin: 0;
}

.icon-box {
  position: relative;
  background: var(--border-gradient-onyx);
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: v-bind(color);
  box-shadow: var(--shadow-1);
  z-index: 1;
}
.icon-box::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--eerie-black-1);
  border-radius: inherit;
  z-index: -1;
}
h3{
}
</style>
