import Vue from "vue";
import VueRouter from "vue-router";
import project from "../views/project.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "project",
    component: project
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
