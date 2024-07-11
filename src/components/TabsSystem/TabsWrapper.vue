<script setup>
import { useSlots, ref, provide } from "vue";

const slots = useSlots();
const tabTitles = ref(slots.default().map((tab) => tab.props.title));
const selectedTitle = ref(tabTitles.value[0]);
provide("selectedTitle", selectedTitle);
</script>

<template>
  <div class="tabs-nav">
    <ul>
      <li
        v-for="title in tabTitles"
        :key="title"
        class="tabs-nav-item"
        :class="{ selected: selectedTitle === title }"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
  </div>
  <slot />
</template>

<style scoped>
.tabs-nav {
  margin: 0 calc(var(--bs-gutter-x) * 0.5) 1rem;
  padding: 0.5rem 0;
  border-width: 1px;
  border-style: solid;
  border-color: var(--jet);
  border-radius: 0.9rem;
  background-color: var(--onyx);
}
.tabs-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: space-around;
  align-items: center;
}

.tabs-nav-item {
  color: var(--light-gray);
  font-size: 1rem;
  transition: 0.4s all ease-out;
  cursor: pointer;
  user-select: none;
}

.tabs-nav-item.selected {
  color: var(--highlight);
}
.tabs-nav-item:hover,
.tabs-nav-item:focus {
  color: var(--mid);
}
</style>
<style></style>
