import Vue from "vue";
import VueRouter from "vue-router";
import TileGrid from "../views/TileGrid.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "TileGrid",
    component: TileGrid
  }
];

const router = new VueRouter({
  routes
});

export default router;
