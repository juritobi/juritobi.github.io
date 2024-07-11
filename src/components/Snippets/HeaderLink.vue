<script setup>
defineProps({
  pIcon: [],
  pTitle: String,
  pContent: String,
  pLink: String,
});
</script>

<template>
  <li>
    <a :href="pLink" class="contact-link">
      <div class="contact-info">
        <p class="title">{{ pTitle }}</p>
        <p class="content">{{ pContent }}</p>
      </div>
      <div class="icon-box">
        <fa-icon :icon="pIcon" />
      </div>
    </a>
  </li>
</template>

<style scoped>
li {
  padding: 0 0 10px 0;
}
a {
  min-width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
}

a:hover .content {
  color: var(--highlight);
  transition: var(--transition-1);
}
.content {
  color: var(--white-1);
  transition: var(--transition-1);
}
p {
  text-align: right;
}

.title {
  color: var(--light-gray-70);
  font-size: var(--fs-8);
  text-transform: uppercase;
}

.icon-box {
  position: relative;
  background: var(--border-gradient-onyx);
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: var(--highlight);
  box-shadow: var(--shadow-1);
  z-index: 1;
}
.icon-box::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--eerie-black-1);
  border-radius: inherit;
  z-index: -1;
}

.contact-link {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: var(--fw-300);
  --fs-7: 14px;
}
</style>
