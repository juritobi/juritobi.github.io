<script setup>
import SectionTitle from "../Headers/SectionTitle.vue";
import outterCard from "../Containers/OuterFrame.vue";
import Experience from "./ExperienceSection.vue";
import album from "../Containers/ExperienceTabs.vue";
import skills from "./SkillsSection.vue";
import MainHeader from "@/components/Headers/MainHeader.vue";
</script>

<template>
  <MainHeader />
  <div id="main" class="container-fluid">
    <SectionTitle title="About Myself">
      <outterCard>
        <p class="mb-2">
          When I was 16, I decided I would work in the video game industry.
          Since then, I've slowly and steadily been working on learning and
          improving my skills to be the best game developer I can be, while also
          exploring other areas of multimedia development. I have always enjoyed
          learning and facing new challenges, which has led me to gain some
          experience in lots of different areas.

          <br /><br />I enjoy working within a team environment. Seeing the
          combined effort we all make always motivates me to put out my best,
          and to achieve great results the whole team can enjoy. I'm an
          organized person and I usually end up taking on leadership roles
          within self-organized groups, being a communication bridge between
          team members and deciding and assigning tasks.

          <br /><br />Overall, I am driven by a deep-seated passion for creating
          games and thrive on the collaborative process. I am eager to
          contribute my skills and expertise to new and exciting projects.
        </p>
      </outterCard>
    </SectionTitle>

    <SectionTitle title="Portfolio">
      <album></album>
    </SectionTitle>

    <Experience></Experience>

    <skills></skills>
  </div>
</template>

<style></style>
