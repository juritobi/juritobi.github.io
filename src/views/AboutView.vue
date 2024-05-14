<script setup>
import HorizontalTimeLine from '../components/HorizontalTimeLine.vue';
import SectionTitle from '../components/SectionTitle.vue';
import outterCard from '../components/outterCard.vue';
import Experience from './ExperienceView.vue';
import album from '../components/album.vue';
</script>

<template>
  <div id="main" class="container-fluid">

    <SectionTitle title="About Myself">
      <outterCard>
        <p class="mb-2">When I was 16, I decided I would work in the video game industry. Since then, I've slowly and steadily been working on learning and improving my skills to be the best game developer I can be, while also exploring other areas of multimedia development. I have always enjoyed learning and facing new challenges, which has led me to gain some experience in lots of different areas.

          <br><br>I enjoy working within a team environment. Seeing the combined effort we all make always motivates me to put out my best, and to achieve great results the whole team can enjoy. I'm an ogranized person and I usually end up taking on leadership roles within self-organized groups, being a communication bridge between team members and deciding and assigning tasks.

          <br><br>Overall, I am driven by a deep-seated passion for creating games and thrive on the collaborative process. I am eager to contribute my skills and expertise to new and exciting projects.
        </p>
      </outterCard>
    </SectionTitle>


    <SectionTitle title="Portfolio">
      <album></album>
    </SectionTitle>


    <Experience></Experience>



    <!-- <div class="row mb-4">
      <h2 class="sec-title"> <i class="fas fa-magic me-4"></i> Skills</h2>
    </div>
    <div class="container skills">
      <div class="row">
        <div class="col-12 single mb-4 py-4 px-4 px-sm-5 text-center">
          <h1 class="mb-4"><i class="fas fa-laptop me-4"></i> programming languages</h1>
          <ul>
            <li>C++</li>
            <li>C</li>
            <li>Assembly code</li>
            <li>C#</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div class="col-12 single mb-4 py-4 px-4 px-sm-5 text-center">
          <h1 class="mb-4"><i class="fas fa-gamepad me-4"></i>Videogame Technologies</h1>
          <ul>
            <li>Unreal Egine</li>
            <li>Unity</li>
            <li>SFML</li>
          </ul>
        </div>

        <div class="col-12 single mb-4 py-4 px-4 px-sm-5 text-center">
          <h1 class="mb-4"> <i class="fas fa-layer-group me-4"></i> Others</h1>
          <ul>
            <li>Git</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Jquery</li>
            <li>Bootstrap</li>
            <li>Blender</li>
            <li>3DS Max</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Premiere</li>
            <li>After Effects</li>
            <li>Arkos Tracker</li>
          </ul>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style></style>
