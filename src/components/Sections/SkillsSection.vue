<script setup>
import SectionLayout from "@/components/layouts/SectionLayout.vue";
import SkillsCard from "@/components/Cards/SkillsCard.vue";
import SkillsList from "@/components/Cards/SkillsList.vue";
</script>

<template>
  <section-layout title="Skills" page="Skills" id="Skills">
    <SkillsCard title="Game Programming">
      <SkillsList
        title="Programming Languages"
        :skills="['C++', 'C', 'C#', 'AssemblyCode', 'lua']"
      />
      <SkillsList
        title="Engines and Libraries"
        :skills="[
          'Unreal Engine 5',
          'Unity',
          'OpenGl',
          'ImGui',
          'OpenAl',
          'SDL',
          'SFML',
        ]"
      />
    </SkillsCard>
    <SkillsCard title="Other">
      <SkillsList
        title="Programming Languages"
        :skills="[
          'JavaScript',
          'Java',
          'Python',
          'HTML',
          'CSS',
          'SQL',
          'PHP',
          'kotlin',
          'swift',
          'MatLab',
        ]"
      />
      <SkillsList
        title="Frameworks"
        :skills="['Vue', 'JQuery', 'Bootstrap', 'Flutter', 'Wordpress']"
      />
      <SkillsList
        title="Tools"
        :skills="[
          'Figma',
          'Photoshop',
          'Premiere',
          'After Effects',
          'Blender',
          '3DS Max',
        ]"
      />
    </SkillsCard>
  </section-layout>
</template>

<style scoped>
</style>
