<script setup>
import router from "@/router";
import { onBeforeMount, onMounted, getCurrentInstance } from "vue";

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onBeforeMount(() => {
  window.removeEventListener("scroll", onScroll);
});

const instance = getCurrentInstance();
var activeSection = "MainHeader";
var navItems = [
  { name: "About Me", id: "MainHeader" },
  { name: "Projects", id: "Projects" },
  { name: "Work Experience", id: "Experience" },
  { name: "Skills", id: "Skills" },
];

function onScroll() {
  const sections = document.querySelectorAll(".section");
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollPosition >= sectionTop - 50 &&
      scrollPosition < sectionTop + sectionHeight - 50
    ) {
      activeSection = section.id;
      if (activeSection === "AboutMe") {
        activeSection = "MainHeader";
      }
    }
  });
  instance?.proxy?.$forceUpdate();
}

function navigate(link) {
  var id = "#" + link;
  router.replace(id);
}
</script>

<template>
  <nav class="navBar">
    <ul>
      <li v-for="item in navItems" :key="item.id" class="nav-item">
        <a
          :href="'#' + item.id"
          @click.prevent="navigate(item.id)"
          :class="{ active: activeSection === item.id }"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
  <a class="to-top" v-on:click="navigate('app')">^</a>
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
  position: sticky;
  top: 0;
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
  cursor: pointer;
  user-select: none;
}

.nav-item a {
  transition: var(--transition-1);
}
.active,
.nav-item a:hover {
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
