<script setup>
import { useSlots, ref, provide } from "vue";

const slots = useSlots();
const tabTitles = ref(slots.default().map((tab) => tab.props.title));
const selectedTitle = ref(tabTitles.value[0]);
provide("selectedTitle", selectedTitle);
</script>

<template>
  <!-- TODO: PDF SWAP -->
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
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.tabs-nav-item {
  color: var(--light-gray);
  padding: 0rem 1rem;
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

@media (max-width: 576px) {
  .tabs-nav {
    margin-left: auto;
    align-self: end;
    width: fit-content;
  }
  .tabs-nav ul {
    padding: 0 0 0 3rem;
    flex-direction: column;
    align-items: end;
    text-align: left;
  }
}
</style>
