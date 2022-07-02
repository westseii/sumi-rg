import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/sandbox/Formula.vue";
import router from "@/router/routes.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
