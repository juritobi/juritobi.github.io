<script setup>
import HeaderLink from "@/components/Snippets/HeaderLink.vue";
</script>

<template>
  <header class="container section">
    <div class="row d-md-flex m-auto">
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
        <ul class="">
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
          <!--          <HeaderLink-->
          <!--            p-icon="clipboard-list"-->
          <!--            p-link="@/assets/Javier Izquierdo Vicedo Portfolio.pdf"-->
          <!--            p-title="CV"-->
          <!--            p-content="Download as PDF"-->
          <!--          />-->
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.row {
  width: 100%;
  justify-content: space-around;
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
  height: 150px;
  width: 150px;
  box-shadow: var(--shadow-1);
}

img {
  padding: 1rem;
}

.name {
  color: var(--white-2);
  font-size: var(--fs-3);
  font-weight: var(--fw-500);
  letter-spacing: -0.25px;
  margin-bottom: 10px;
}
.role {
  color: var(--white-1);
  background: var(--onyx);
  font-size: var(--fs-8);
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
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}

</style>
