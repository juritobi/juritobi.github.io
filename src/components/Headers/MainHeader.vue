<script setup></script>

<template>
  <header class="container-fluid">
    <div class="row">
      <div class="col-md-4 mb-2">
        <img class="float-md-end" src="@/assets/img.png" alt="photo" />
      </div>
      <div class="col-md-8 mb-4 d-flex align-items-center">
        <div class="w-100">
          <h1>Javier Izquierdo Vicedo</h1>
          <h2 class="mb-1">game programmer</h2>
          <h6>14/06/1998</h6>
        </div>
      </div>
    </div>

    <div class="contact mx-5">
      <a href="mailto:juritobi@gmail.com">
        <div class="icon">
          <fa-icon icon="envelope" />
          <h4>juritobi@gmail.com</h4>
        </div>
      </a>
      <a href="tel:34674410029">
        <div class="icon">
          <fa-icon icon="phone" />
          <h4>+34 674 410 029</h4>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/juritobi/">
        <div class="icon">
          <fa-icon :icon="['fab', 'linkedin']" />
          <h4>Javier Izquierdo Vicedo</h4>
        </div>
      </a>
      <a
        href="@/assets/Javier Izquierdo Vicedo Portfolio.pdf"
        download="Portfolio Javier Izquierdo Vicedo"
      >
        <div class="icon">
          <fa-icon icon="clipboard-list" />
          <h4>Download as PDF</h4>
        </div>
      </a>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #2f3136;
  text-align: center;
}

img {
  width: 150px;
  height: 150px;
}

.contact {
  border-width: 1px 0 0 0;
  border-color: #202225;
  border-style: solid;

  padding: 0;
  text-align: center;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

.contact a {
  border: solid;
  border-color: transparent;
  border-width: 0 0 2px;
}

.contact a:hover {
  border-color: rgb(0, 0, 138);
}

.icon {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
}
.icon > svg {
  color: white;
  padding: 1em 1em 1em 0;
}
.icon > h4 {
  flex-grow: 1;
  padding: 1rem 0;
}
</style>
