import Vue from "vue";
import VueRouter from "vue-router";
import VueHome from "../views/Home.vue";
import vueMovieSearch from "../components/MovieSearch.vue";
import Contacts from "../views/Contacts.vue";
//import NodeNetwork from "../views/NodeNetwork.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: VueHome
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts
  },
  {
    path: "/moviesearch",
    name: "Movie Search",
    component: vueMovieSearch
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
