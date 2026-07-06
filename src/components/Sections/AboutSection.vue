<script setup>
import MarkdownContent from "@/components/MarkdownContent.vue";
import SectionLayout from "@/components/layouts/SectionLayout.vue";
import aboutMarkdown from "@/content/sections/about.md?raw";
</script>

<template>
  <SectionLayout page="about" title="About Me" id="AboutMe">
    <section class="about-text">
      <MarkdownContent :source="aboutMarkdown" />
    </section>
  </SectionLayout>
</template>

<style scoped></style>
