<script setup>
import json from "../assets/db.json"
import HorizontalTimeLine from '../components/HorizontalTimeLine.vue';
import SectionTitle from '../components/SectionTitle.vue';
import outterCard from '../components/outterCard.vue';

import { ref, onMounted, onBeforeMount, onUnmounted, getCurrentInstance } from 'vue'

var fisrtDate = new Date(json[0].start);
var finalDate = new Date().getFullYear() + 1;
var years = finalDate - fisrtDate.getFullYear();

var containerWidth = ref(900);
var monthSize = ref(containerWidth / years / 12);
var yearSize = ref(containerWidth / years);

const instance = getCurrentInstance();
const tl = ref();
const mainContainer = ref(null);


onBeforeMount(() => {
  window.addEventListener("resize", windowResize);
})

onUnmounted(() => {
  window.removeEventListener("resize", windowResize);
});

onMounted(() => {
  windowResize();
})

function windowResize() {

  containerWidth = mainContainer.value.clientWidth;
  monthSize = containerWidth / years / 12;
  yearSize = containerWidth / years;


  for (var i = 0; i < json.length; i++) {
    //add start and length in pixels
    var end = json[i].end != null ? new Date(json[i].end) : new Date();
    var start = new Date(json[i].start);

    json[i].length = (
      (end.getFullYear() - start.getFullYear()) *
      12 - start.getMonth() + end.getMonth()
    ) * monthSize;

    json[i].tlSrtart = (
      (start.getFullYear() - fisrtDate.getFullYear()) * 12 + start.getMonth()
    ) * monthSize;

    switch (json[i].Role) {
      case "Studies":
        json[i].color = "#ff9704";
        json[i].markerClass = "markerTop";
        json[i].yPos = "-55px";
        break;
      case "Game Development":
        json[i].color = "#dd3d01";
        json[i].markerClass = "markerTop";
        json[i].yPos = "-75px";
        break;
      case "Web Developmnet":
        json[i].color = "#56c2f3";
        json[i].markerClass = "markerBot";
        json[i].yPos = "20px";
        break;
      default:
        json[i].color = "#c2e34e";
        json[i].markerClass = "markerBot";
        json[i].yPos = "50px";
        break;
    }
  }
  tl.value.methodThatForcesUpdate();
  instance?.proxy?.$forceUpdate();
}
var lineHeight = "12px";
</script>

<template>
  <SectionTitle title="Experience and Studies">
    <div class="row timeline mx-0 mb-4">
      <div ref="mainContainer" class="m-0 p-0 row">
        <HorizontalTimeLine ref="tl" :pYears = years :pYearSize=yearSize :pFisrtDate=fisrtDate :pJson=json>
        </HorizontalTimeLine>
      </div>
    </div>


    <div class="job mb-4 py-4 px-4 px-sm-5 row">
      <h2>Game developer</h2>
      <div class="card-hold d-flex justify-content-center flex-wrap">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Crunch Games</h5>
            <h6 class="card-subtitle mb-2 text-muted">September 2019 - October 2020<br>1 year</h6>
            <p class="card-text">Crunch Games is a group of college colleagues with whom I've
              developed most of my games. We are a total of 6 memebers and with them I have
              developed Dungerous, Ratones y Mazmorras, RYM: Alfreds revenge and Illyria.</p>
            <a href="#portfolio" class="card-link float-end">See Proyects</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Hobby Projects</h5>
            <h6 class="card-subtitle mb-2 text-muted">December 2021 - now<br></h6>
            <p class="card-text">I'm working in a Unity game. a 2D rogue-like (similar to wizard of legend) with an
              artist friend.</p>
          </div>
        </div>
      </div>
    </div>

    
    <div class="row">
      <div class="job mb-4 py-4 px-4 px-sm-5 row">
        <h2>Full-stack Developer</h2>
        <div class="card-hold d-flex justify-content-center flex-wrap">
          <div class="card ">
            <div class="card-body">
              <h5 class="card-title">Super Kids</h5>
              <h6 class="card-subtitle mb-2 text-muted">May 1019 - September 2021<br>November 2021 -
                January 2022<br>2 years</h6>
              <p class="card-text"> Superkids is a Web app with Gamified tests to detect possible
                learning disorders in the early stages of
                development. I worked on it as a freelance and I developed the whole app wich is now
                being used by several schools in Spain</p>
              <a href="https://play.google.com/store/apps/details?id=com.espaciopedagogico.superkids&hl=en_US&gl=US"
                class="card-link float-end">See Proyect</a>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Diva's</h5>
              <h6 class="card-subtitle mb-2 text-muted">June 2018 - August 2018<br>October 2021 -
                December 2021<br>4 months</h6>
              <p class="card-text"> Diva's is weigh loss center and I developed their website and a
                mobile app to help clients keep track of their diet and what they are etaing</p>
              <a href="https://play.google.com/store/apps/details?id=com.centrodivas.divasdieta&hl=en_US"
                class="card-link float-end">See Proyect</a>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Vicedo Inmobiliaria</h5>
              <h6 class="card-subtitle mb-2 text-muted">June 2020 - August 2020<br>2 months</h6>
              <p class="card-text">Vicedo Inmobiliaria is a Real estate agency and I helped develop
                their website</p>
              <a href="https://vicedo.es" class="card-link float-end">See Website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="job mb-4 py-4 px-4 px-sm-5 row">
        <h2>Studies</h2>
        <div class="card-hold d-flex justify-content-center flex-wrap">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Multimedia engenieering</h5>
              <h4 class="card-title">Universidad de Alicante, Spain</h4>
              <h6 class="card-subtitle mb-2 text-muted">September 2016 - September 2021<br>5 years
              </h6>
              <p class="card-text">the degree is aimed at producing professionals capable of leading new projects in
                the world of Multimedia, weather in the videogames sector or in web development.</p>
              <a href=" https://web.ua.es/en/grados/grado-en-ingenieria-multimedia/objectives-career-options.html"
                class="card-link float-end">More about the degree</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="job mb-4 py-4 px-4 px-sm-5 row">
        <h2>Others</h2>
        <div class="card-hold d-flex justify-content-center flex-wrap">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Activawords</h5>
              <h4 class="card-title">2d video animation</h4>
              <h6 class="card-subtitle mb-2 text-muted">June 2021 - August 2021<br>2 months</h6>
              <p class="card-text"> I was here as an Intern making 2d animations for videos aimed at
                teach
                the spanish language</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Julian Kenca</h5>
              <h4 class="card-title">Video editor/graphic designer</h4>
              <h6 class="card-subtitle mb-2 text-muted">June 2017 - August 2017<br>2 months</h6>
              <p class="card-text">Julian is a photographer and videographer, I helped him with his
                branding and video editing</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">

              <h5 class="card-title">Dacom informatica</h5>
              <h4 class="card-title">Technical Service</h4>
              <h6 class="card-subtitle mb-2 text-muted">June 2016 - August 2016<br>2 months</h6>
              <p class="card-text">I worked here building and reparing computers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionTitle>
</template>

<style scoped>
  .timeline {
  font-family: sans-serif;
  position: relative;
  width: 100%;
  height: auto;
  padding: 2rem 3rem;
  background: rgb(15, 15, 15);
  border-radius: 10px;
}

.timeline h1 {
  text-align: center;
  color: #fff;
  margin: 0 0 100px;
}


.timelines-years {
  padding: 0 0 0 0;
  width: auto;
  margin: auto;
  white-space: nowrap;
  border-top: 1px solid #282828;
  list-style: none;
  font-size: 0;
  height: 120px;
}

.timelines-years>li {
  position: relative;
  top: -6px;
  display: inline-block;
  width: calc(v-bind('pYearSize'));
  color: #868686;
  font-size: 11px;
  line-height: 11px;
  text-indent: -12px;
}

.timeline-events {

  position: relative;
  padding: 0;
  list-style: none;
  white-space: nowrap;
  font-size: 0;
}

.timeline-event {
  position: absolute;
}

.timeline-events h2,
.timeline-events h3,
.timeline-events h4 {
  margin: 0 0 1px 0;
  font-weight: normal;
  font-size: 11px;
}

.timeline-events h2 {
  color: #777;
  text-transform: uppercase;
}

.timeline-events h4 {
  color: #fff;
  font-style: italic;
}

.timeline-events li {
  display: inline-block;
}

.timeline-events li:before {
  position: absolute;
  left: 0;
  top: -15px;
  height: v-bind('lineHeight');
  border-radius: v-bind('lineHeight');
  content: '';
}

.leyend {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
}

.leyend span {
  margin: 0 0 1px 0;
  font-weight: normal;
  font-size: 11px;
  position: relative;
  margin: 0 1.5rem;
}

.leyend span::before {
  width: 120%;
  background-color: #DD3D01;

  position: absolute;
  left: 0;
  top: 15px;
  height: v-bind('lineHeight');
  border-radius: v-bind('lineHeight');
  content: '';
}

.leyend>div:first-child>span:first-child {
  color: #DD3D01;
}

.leyend>div:first-child>span:first-child::before {
  background: #DD3D01;
}

.leyend>div:first-child>span:last-child {
  color: #FF9704;
}

.leyend>div:first-child>span:last-child::before {
  background: #FF9704;
}

.leyend>div:last-child>span:first-child {
  color: #56C2F3;
}

.leyend>div:last-child>span:first-child::before {
  background: #56C2F3;
}

.leyend>div:last-child>span:last-child {
  color: #C2E34E;
}

.leyend>div:last-child>span:last-child::before {
  background: #C2E34E;
}
</style>