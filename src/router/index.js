import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Player from "../components/Player.vue";
import Playlist from "../components/Playlist";
import HomePagePlayer from "../components/HomePagePlayer.vue";
import Explor from "../components/Explor.vue";
import Language from "../components/Language.vue";
import Level from "../components//Level.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/demo',
    name: 'demo',
    component: Player,
  },

  {
    path: '/playlist',
    name: 'Playlist',
    component: Playlist
  },


  {
    path: '/plyhome',
    name: 'plyhome',
    component: HomePagePlayer
  },


  {
    path: '/explor',
    name: 'Explor',
    component: Explor
  },


  // {

  //   path: '/Language',
  //   name: 'Language',
  //   component: Language

  // }

  {

    path: '/level',
    name: 'Language',
    component: Level

  }





]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
