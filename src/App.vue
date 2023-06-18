<script setup>
import AboutView from './views/AboutView.vue';

</script>

<template>
  <header class="container-fluid">
    <div class="row">
      <div class="col-md-4 mb-2">
        <img class="float-md-end" src="@/assets/img.png" alt="foto">
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
        <div class="icon"><i class="fas fa-envelope"></i>
          <h4>juritobi@gmail.com</h4>
        </div>
      </a>
      <a href="https://wa.me/34674410 029">
        <div class="icon"><i class="fas fa-phone"></i>
          <h4>+34 674 410 029</h4>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/juritobi/">
        <div class="icon"><i class="fab fa-linkedin"></i>
          <h4>Javier Izquierdo Vicedo</h4>
        </div>
      </a>
      <a href="@/assets/Javier Izquierdo Vicedo Portfolio.pdf" download="Portfolio Javier Izquierdo Vicedo">
        <div class="icon"><i class="fas fa-clipboard-list"></i>
          <h4>Downloas as PDF</h4>
        </div>
      </a>
      <!--<a href="https://juritobi.com">
            <div class="icon"><i class="fas fa-clipboard-list"></i>
                <h4>See Online</h4>
            </div>
        </a>-->
    </div>
  </header>

  <AboutView />
</template>

<style scoped>
img {
  width: 150px;
  height: 150px;
}
</style>
