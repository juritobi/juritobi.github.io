<script setup>

</script>

<template>
  <aside class="sidebar isOpen">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="@/assets/img.png" alt="photo" width="80" />
      </figure>

      <div class="info-content">
        <h1 class="name" title="Azad Furkan ŞAKAR">Azad Furkan ŞAKAR</h1>

        <p
          class="role text-center xl:block flex items-center justify-center gap-1"
        >
          <span class="xl:after:content-[''] after:content-[',']"
            >Civil Engineer</span
          >
          <span>Web developer</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">Email</p>

            <a href="mailto:info@afsakar.com" class="contact-link"
              >info@afsakar.com</a
            >
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">Github</p>

            <a
              href="https://github.com/afsakar"
              class="contact-link"
              target="_blank"
              >afsakar</a
            >
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">Linkedin</p>

            <a
              href="https://tr.linkedin.com/in/afsakar"
              class="contact-link"
              target="_blank"
              >Azad Furkan ŞAKAR</a
            >
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">Location</p>

            <address>Diyarbakır, Turkey</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <a
            href="https://www.twitter.com/afsakar"
            class="social-link"
            target="_blank"
          >
            <ion-icon name="logo-twitter" />
          </a>
        </li>

        <li class="social-item">
          <a
            href="https://www.instagram.com/afsakar"
            class="social-link"
            target="_blank"
          >
            <ion-icon name="logo-instagram" />
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped></style>
