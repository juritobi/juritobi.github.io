<script setup>
import SectionTitle from "../Headers/SectionTitle.vue";
import OutterCard from "@/components/Containers/OuterFrame.vue";
</script>

<template>
  <SectionTitle title="Skills">
    <outterCard>
      <div class="container skills">
        <h1 class="mb-4 text-center">Game Programming</h1>
        <div class="row">
          <div class="col-12 col-lg-6">
            <h2 class="text-center">Languages</h2>
            <div class="col-12 single mb-4 py-3 px-3 text-center">
              <ul class="mb-0">
                <li>C++</li>
                <li>C</li>
                <li>C#</li>
                <li>Assembly code</li>
                <li>lua</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <h2 class="text-center">Engines and frameworks</h2>
            <div class="col-12 single mb-4 py-3 px-3 text-center">
              <ul class="mb-0">
                <li>Unreal Engine 5</li>
                <li>Unity</li>
                <li>OpenGl</li>
                <li>ImGui</li>
                <li>OpenAl</li>
                <li>SDL</li>
                <li>SFML</li>
              </ul>
            </div>
          </div>
        </div>
        <h1 class="mb-4 text-center">Others</h1>
        <div class="row">
          <div class="col-12 col-lg-4">
            <h2 class="text-center">Languages</h2>
            <div class="col-12 single mb-4 py-3 px-3 text-center">
              <ul class="mb-0">
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
                <li>PHP</li>
                <li>kotlin</li>
                <li>swift</li>
                <li>MatLab</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <h2 class="text-center">Frameworks</h2>
            <div class="col-12 single mb-4 py-3 px-3 text-center">
              <ul class="mb-0">
                <li>Vue</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>Flutter</li>
                <li>Wordpress</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <h2 class="text-center">Tools</h2>
            <div class="col-12 single mb-4 py-3 px-3 text-center">
              <ul class="mb-0">
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Premiere</li>
                <li>After Effects</li>
                <li>Blender</li>
                <li>3DS Max</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </outterCard>
  </SectionTitle>
</template>

<style>
.skills ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
}

.skills li {
  padding: 0.5rem 1.3rem;
  background-color: #101721;
  border-radius: 100px;
  color: #f5f5f5;
  text-decoration: none;
  border: solid;
  border-width: 1px 2px 5px;
  border-color: #949394;
  margin: 0.2rem 0.2rem 0.2rem 0.5em;
}

.skills li * {
  margin: 0;
}

.skills h3 {
  margin: 0.3em;
  text-align: center;
}
</style>
