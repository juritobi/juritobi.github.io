import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import{ FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

import "./assets/main.css";

const app = createApp(App);
app.component("fa-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
