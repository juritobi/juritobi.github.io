
<script setup>
import card from '../components/Card.vue';
import TabsWrapper from '../components/TabsWrapper.vue';
import TabItem from '../components/TabItem.vue';
import json from "../assets/portfolio.json"
import { onBeforeMount } from 'vue'

var gamesIds = [];
var libsIds = [];
var appsIds = [];

onBeforeMount(() => {
  windowResize();
})

function windowResize() {

  for (var i = 0; i < json.length; i++) {
    var d = new Date(json[i].releaseDate);
    json[i].yearDate = d.getFullYear();

    switch (parseInt( json[i].type)) {
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
  }
};
</script>

<template>
  <TabsWrapper>
    <TabItem title="Games">
      <template v-for="i in gamesIds" >
        <card v-bind="json[i]" />
      </template>
    </TabItem>
    <TabItem title="Librarys, tools and engines">
      <template v-for="i in libsIds" >
        <card v-bind="json[i]" />
      </template>
    </TabItem>
    <TabItem title="Apps">
      <template v-for="i in appsIds" >
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