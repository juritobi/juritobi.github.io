<script setup>
import card from "../components/Card.vue";
import TabsWrapper from "../components/TabsWrapper.vue";
import TabItem from "../components/TabItem.vue";
import json from "../assets/portfolio.json";
import { onBeforeMount } from "vue";
import Copperfield from "@/components/Copperfield.vue";

var highLightsIds = [];
var gamesIds = [];
var libsIds = [];
var appsIds = [];

onBeforeMount(() => {
  windowResize();
});

function windowResize() {
  for (var i = 0; i < json.length; i++) {
    if (json[i].display == "1") {
      var d = new Date(json[i].releaseDate);
      json[i].yearDate = d.getFullYear();

      switch (parseInt(json[i].type)) {
        case 0:
          gamesIds.push(i);
          break;
        case 1:
          libsIds.push(i);
          break;
        case 2:
          appsIds.push(i);
          break;
        default:
          break;
      }
      if (json[i].HighLight == "1") {
        highLightsIds.push(i);
      }
    }
  }
}
</script>

<template>
  <TabsWrapper>
    <TabItem title="High Lights">
      <template v-slot:default>
        <Copperfield v-bind="json[0]">
          <template v-slot:default>
            <p class="pt-3">
              This is the first published game I've been part of. In it, I've been able to experience and learn what
              it's like to work with multiple team members with different skill sets and roles. We were a total of 16
              members and 2 producers.
            </p>
            <h4 class="pe-4 pt-4 pb-2">Features and Tasks I was in charge of</h4>
            <ul>
              <li><b>Final Boss:</b> This boss had 5 different attacks and 5 different phases. These phases modified the
                behavior and the attacks he could perform, as well as the size and speed of some of them.
              </li>
              <li><b>Performance Optimization:</b> I was in charge of measuring times and implementing solutions to performance
                problems, such as a custom system to load and unload some expensive actors during gameplay, or finding
                lumen parameters that increased the performance without sacrificing the visuals.
              </li>
              <li><b>Custom Graphics Settings:</b> The default settings that Unreal gives by default treated the visuals very
                poorly on mid and low presets. So, I was in charge of finding which commands I needed to still lower the
                requirements while keeping it visually appealing.
              </li>
              <li><b>Destructibles:</b> I dealt with Unreal's Chaos Physics to create objects that the player could break, like
                boxes or vases.
              </li>
              <li><b>Non-Playable Character:</b> As a secondary task, the player can push a button to open Robin's cage and
                free him, which will trigger a dialogue and reward you with coins.
              </li>
              <li><b>Coins and Pickups:</b> I made all the behavior of these coins which drop from enemies when hit, similarly
                to the 3D Sonic games.
              </li>
            </ul>
            <h3></h3>
          </template>
        </Copperfield>
        <Copperfield v-bind="json[1]">
          <template v-slot:default>
            <p class="pt-3">
              Copperfield Engine is a 3D game engine created by just two people.
              It aims to offer the essential features for game development, with
              an easy-to-use API that follows a data-driven design with the use
              of ECS.
            </p>
            <p class="pt-3">
              The only libraries used are glfw, glew, imgui, tinyobjloader,
              StbImage and OpenAL. We have tried to keep them to a minimum,
              having our own math and collision library, as well as physics.
            </p>
            <h3 class="pe-4 pt-4 pb-2">Features</h3>
            <ul>
              <li>Entity Component System</li>
              <li>Multi threaded asset load</li>
              <li>Forward and Deferred Rendering</li>
              <li>Action based input</li>
              <li>Shadow Mapping</li>
              <li>Physics and collisions</li>
              <li>Sound and Music</li>
            </ul>
            <h3></h3>
          </template>
        </Copperfield>
      </template>
    </TabItem>
    <TabItem title="Games">
      <template v-for="i in gamesIds">
        <card v-bind="json[i]" />
      </template>
    </TabItem>
    <TabItem title="Tools and Demos">
      <template v-for="i in libsIds">
        <card v-bind="json[i]" />
      </template>
    </TabItem>
    <TabItem title="Apps">
      <template v-for="i in appsIds">
        <card v-bind="json[i]" />
      </template>
    </TabItem>
  </TabsWrapper>
</template>

<style scoped>
body {
  padding: 10px;
}

.nav-pills>li>a {
  border-radius: 4px 4px 0 0;
}

.tab-content {
  color: white;
  background-color: #428bca;
  padding: 5px 15px;
}
</style>
