import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/sb/Sandbox.vue";
import router from "@/router/routes.js";
import tooltip from "@/directives/tooltip.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive("tooltip", tooltip);

app.mount("#app");
