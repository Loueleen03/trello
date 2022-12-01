import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/navbar.css";
import "./assets/modal.css";
import "./assets/column.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
