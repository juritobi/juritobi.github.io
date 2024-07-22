<script setup>
import HeaderLink from "@/components/Snippets/HeaderLink.vue";
</script>

<template>
  <header class="container section">
    <div class="main-content">
      <figure class="image-box">
        <img src="@/assets/Logo.png" alt="photo" />
      </figure>

      <div class="info-content">
        <h1 class="name" title="Javier Izquierdo Vicedo">
          Javier Izquierdo Vicedo
        </h1>
        <p class="role">
          <span>Game Programmer</span>
        </p>
      </div>
    </div>

    <div class="contacts-list">
      <ul>
        <HeaderLink
          p-icon="envelope"
          p-link="mailto:juritobi@gmail.com"
          p-title="EMAIL"
          p-content="juritobi@gmail.com"
        />
        <HeaderLink
          p-icon="phone"
          p-link="tel:34674410029"
          p-title="PHONE"
          p-content="+34 674 410 029"
        />
        <HeaderLink
          :p-icon="['fab', 'linkedin']"
          p-link="https://www.linkedin.com/in/juritobi/"
          p-title="LinkedIn"
          p-content="Javier Izquierdo Vicedo"
        />
        <!--        <HeaderLink-->
        <!--          p-icon="clipboard-list"-->
        <!--          p-link="@/assets/Javier Izquierdo Vicedo Portfolio.pdf"-->
        <!--          p-title="CV"-->
        <!--          p-content="Download as PDF"-->
        <!--        />-->
        <HeaderLink
          p-icon="calendar"
          p-title="Birthday"
          p-content="14/06/1998"
        />
      </ul>
    </div>
  </header>
</template>

<style scoped>
.section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
}
.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: fit-content;
}
.image-box {
  background: var(--bg-gradient-onyx);
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  height: 9rem;
  width: 9rem;
  box-shadow: var(--shadow-1);
  margin: 0;
}

img {
  padding: 1rem;
}

.name {
  color: var(--white-2);
  font-size: 2.2rem;
  font-weight: var(--fw-500);
  letter-spacing: -0.25px;
  margin-bottom: 10px;
}
.role {
  color: var(--white-1);
  background: var(--onyx);
  font-size: 1.2rem;
  font-weight: var(--fw-300);
  width: max-content;
  padding: 3px 12px;
  border-radius: 8px;

  text-align: center;
}
.contacts-list {
  width: fit-content;
}
ul {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: end;
  width: 28rem;
  gap: 0 1rem;
}
li {
  width: 13rem;
}
@media (max-width: 1200px) {
  .section {
    gap: 1rem;
  }
  ul {
    padding: 1rem 0 0 0;
    justify-content: space-around;
  }
}

@media (max-width: 576px) {
  .main-content {
    text-align: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .image-box {
    height: 7rem;
    width: 7rem;
  }
  .name {
    font-size: 1.8rem;
  }
  .role {
    font-size: 1.2rem;
    width: auto;
  }
  ul {
    width: auto;
  }
}
</style>
