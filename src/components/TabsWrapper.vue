<script setup>

import { useSlots, ref, provide } from "vue";

const slots = useSlots();
const tabTitles = ref(slots.default().map((tab) => tab.props.title));
const selectedTitle = ref(tabTitles.value[0]);
provide("selectedTitle", selectedTitle);
</script>

<template>
  <div class="row d-flex p-0 my-4 text-justify mx-auto">
    <ul class="tabs__header col-12">
      <li
        v-for="title in tabTitles"
        :key="title"
        class="tabs__item"
        :class="{ selected: selectedTitle === title }"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>

    <slot />
  </div>
</template>

<style scoped>
div {
  padding: 2rem 3rem;
  border-radius: 10px;
  margin: 0;
}

.tabs__header {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: start;
  gap: 5px;
}

.tabs__item {
  background-color: #2f3136;
  padding: 0.5rem 1rem;
  border-radius: 10px 10px 0 0;
  transition: 0.4s all ease-out;
  cursor: pointer;
  user-select: none;
}

.tabs__item.selected {
  background-color: #202225;
}
</style>
<style>
.tabs__content {
  background-color: #202225;
  min-height: 300px;
}
</style>
