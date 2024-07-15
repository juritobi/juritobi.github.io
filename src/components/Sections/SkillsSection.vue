<script setup>
import SectionLayout from "@/components/layouts/SectionLayout.vue";
import SkillsCard from "@/components/Cards/SkillsCard.vue";
import SkillsList from "@/components/Cards/SkillsList.vue";
</script>

<template>
  <section-layout p-title="Skills" p-data="Skills">
    <SkillsCard p-title="Game Programming">
      <SkillsList
        pTitle="Programming Languages"
        :p-skills="['C++', 'C', 'C#', 'AssemblyCode', 'lua']"
      />
      <SkillsList
        pTitle="Engines and Libraries"
        :p-skills="[
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
    <SkillsCard p-title="Other">
      <SkillsList
        pTitle="Programming Languages"
        :p-skills="[
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
        pTitle="Frameworks"
        :p-skills="['Vue', 'JQuery', 'Bootstrap', 'Flutter', 'Wordpress']"
      />
      <SkillsList
        pTitle="Tools"
        :p-skills="[
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
