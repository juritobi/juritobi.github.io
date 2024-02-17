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
        <p class="mb-2">I have a degree on multimedia engineering, and HND in Game
          Progamming, My strongest suit is gameplay programming and I'm also
          interested in game design, althoug I also enjoy low level programming
          and tools. I also have a little experience in web development, photo and
          video editing and 3D modeling and animation.
        </p>
        <p class="mb-2">I have always loved to learn new things and I have never
          been afraid to take on new projects and challenges. That has helped me
          develop my learning abilities, making it easier for me to adapt to new
          environments and quickly get comfortable with the tools I use.
        </p>
      </outterCard>
    </SectionTitle>


    <SectionTitle title="Portfolio">
      <album></album>
      <!---<outterCard>
      <div class="col-xl-6">
        <h1>RYM: Alfred's revenge</h1>
        <h2>C game for Amstrad CPC</h2>
        <p>Hobby project made with a colleague, it took us 5 weeks to develop and was presented to the
          CPCRetrodev contest, qualifying 12th out of 49 games.</p>
        <p>The game is an action platformer, where the player has to find 4 specific rooms to open the
          gate
          to the final boss, we were trying to make a game similar to rogue legacy, with the obvious
          limitation of an Amstrad CPC.</p>
        <p class="m-0">I was significantly involved in:</p>
        <ul>
          <li>Movement, combat and collision systems</li>
          <li>AI design and programming</li>
          <li>Code structure and optimization</li>
          <li>Project management</li>
          <li>Game design, art, music and SFX</li>
        </ul>


      </div>
      <div class="col-xl-6 d-flex justify-content-center backrel">
        <a class="backfloat float-right" href="https://www.youtube.com/embed/44mD2x-y3YM">
          <img src="RYM.png" alt="Imagen RYM: Alfreds revenge">
          <i class="fas fa-play"></i>
        </a>
        <iframe class="float-right" src="https://www.youtube.com/embed/44mD2x-y3YM" title="YouTube video player"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <div class="link-bar mt-4 d-flex justify-content-sm-center align-items-center flex-column flex-sm-row ">
        <a href="Crunch Games Amstrad.zip" download="Crunch Games Amstrad">Try the game</a>
        <a href="https://github.com/juritobi/RYM_Alfreds_revenge">Source code</a>
      </div>
  </outterCard>

  <div class="single mb-4 py-4 px-4 px-sm-5 row">
    <div class="col-xl-6">
      <h1>Illyria</h1>
      <h2>C++ Game for PC</h2>
      <p>University project made with 5 other colleagues, programmed exclusively with C++ and OpenGL</p>
      <p>The game is a 1 vs 1 arena action competitive game, similar to laser league, you'll have to
        kill
        the opponent by activating the traps scattered through the arena.</p>
      <p class="m-0">I was significantly involved in:</p>
      <ul>
        <li>Game engine structure and optimization (ECS)</li>
        <li>movement, physics and collision systems</li>
        <li>AI design, decision making (behavior trees) and execution</li>
        <li>Project Management</li>
        <li>Character art, animations, game design, branding, video editor and social networks.</li>
      </ul>

    </div>
    <div class="col-xl-6 d-flex justify-content-center backrel">
      <a class="backfloat float-right" href="https://www.youtube.com/embed/kN5fQdfmVuo">
        <img src="Illyria.png" alt="Imagen Illyria">
        <i class="fas fa-play"></i>
      </a>
      <iframe class="float-right w-100" src="https://www.youtube.com/embed/kN5fQdfmVuo" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
    <div class="link-bar mt-4 d-flex justify-content-sm-center align-items-center flex-column flex-sm-row ">
      <a href="Illyria (for Windows).zip" download="Illyria (for Windows)">Try the game</a>
    </div>
  </div>

  <div class="single mb-4 py-4 px-4 px-sm-5 row">
    <div class="col-xl-6">
      <h1>Ratones y mazmorras</h1>
      <h2>Assembly game for Amstrad CPC</h2>
      <p>University project made with 2 other colleagues, it took us 5 weeks to develop and was
        presented
        to the CPCRetrodev contest, qualifying 8th out of 35 games.</p>
      <p>The game is a maze action game, where the player has to get the keys to open the door and
        advance
        to the next level, we wanted to make something similar to Pacman, but with a level-based
        design.
      </p>
      <p class="m-0">I was significantly involved in:</p>
      <ul>
        <li>AI design and programming</li>
        <li>Movement and collision systems</li>
        <li>code structure and optimization</li>
        <li>Project Management</li>
        <li>game design, music and SFX</li>
      </ul>

    </div>

    <div class="col-xl-6 d-flex justify-content-center backrel">
      <a class="backfloat float-right" href="https://www.youtube.com/embed/gYLVMX4MEFY">
        <img src="Ratones Y Mazmorras.png" alt="Imagen Ratones y mazmorras">
        <i class="fas fa-play"></i>
      </a>
      <iframe class="float-right w-100" src="https://www.youtube.com/embed/gYLVMX4MEFY" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>

    <div class="link-bar mt-4 d-flex justify-content-sm-center align-items-center flex-column flex-sm-row ">
      <a href="Crunch Games Amstrad.zip" download="Crunch Games Amstrad">Try the game</a>
    </div>
  </div>
  
  <div class="single mb-4 py-4 px-4 px-sm-5 row">
    <h1>Other prjects</h1>
    <ul class="row mt-4">
      <li class="sp row p-3 justify-content-end justify-content-md-between">
        <div class="col-md-8 col-12">
          <h5>VR cooked!</h5>
          <p class="m-0">VR cooperative game made with UE4 blueprints and C++, similar to keep
            talking and nobody explodes.</p>
        </div>
        <div class="link-bar col-md-4 d-flex align-content-center mt-3 mt-md-0">
          <a href="https://youtu.be/8mbv1-zvL-A"> Gameplay video</a>
        </div>
      </li>
      <li class="sp row p-3 justify-content-end justify-content-md-between">
        <div class="col-md-8 col-12">
          <h5>Dungerous</h5>
          <p class="m-0">An action-adventure game made with C++ and SFML</p>
        </div>
        <div class="link-bar col-md-4 d-flex align-content-center mt-3 mt-md-0">
          <a href="https://www.youtube.com/watch?v=INFx4gcOV3E"> Gameplay video</a>
        </div>
      </li>
      <li class="sp row p-3 justify-content-end justify-content-md-between">
        <div class="col-md-8 col-12">
          <h5>Those pesky heroes</h5>
          <p class="m-0">A turn-based combat game made with Unity</p>
        </div>
        <div class="link-bar col-md-4 d-flex align-content-center mt-3 mt-md-0">
          <a href="https://www.youtube.com/watch?v=bSPWiCbUxGk"> Gameplay video</a>
        </div>
      </li>
    </ul>
  </div>-->
    </SectionTitle>




    <Experience></Experience>





    <div class="row mb-4">
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
    </div>
  </div>
</template>

<style></style>
