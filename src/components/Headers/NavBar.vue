<script setup>
import router from "@/router";

function navigate(link) {
  router.replace(link);
}
</script>

<template>
  <!-- TODO: PDF SWAP -->
  <div class="navBar">
    <ul>
      <li class="nav-item" v-on:click="navigate('#AboutMe')">About Me</li>
      <li class="nav-item" v-on:click="navigate('#Projects')">Projects</li>
      <li class="nav-item" v-on:click="navigate('#Experience')">
        Work Experience
      </li>
      <li class="nav-item" v-on:click="navigate('#Skills')">Skills</li>
    </ul>
  </div>
  <a class="to-top" v-on:click="navigate('#app')">^</a>
</template>

<style scoped>
.to-top {
  width: 2rem;
  height: 2rem;
  line-height: 1.4rem;
  text-align: center;
  font-weight: bolder;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 100;
  cursor: pointer;
  padding: 5px;
  border-radius: 80px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--jet);
  background-color: var(--onyx);
}
.to-top:hover {
  color: var(--highlight);
}

.navBar {
  z-index: 100;
  padding: 0.5rem 0;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: var(--jet);
  border-radius: 0 0 0 0.9rem;
  background-color: var(--onyx);
  width: max-content;
  margin-left: auto;
}

.navBar ul {
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.nav-item {
  color: var(--light-gray);
  padding: 0rem 1rem;
  font-size: 1rem;
  transition: 0.4s all ease-out;
  cursor: pointer;
  user-select: none;
}

.nav-item:hover,
.nav-item:focus {
  color: var(--highlight);
}

@media (max-width: 576px) {
  .navBar {
    margin: auto;
    width: fit-content;
    border-width: 0 1px 1px 1px;
    border-radius: 0 0 20px 20px;
  }
  .navBar ul {
    padding: 0 4rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 0.3rem;
    justify-content: center;
  }
}
</style>
