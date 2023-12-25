<template>
  <v-app>
    <SideBar />
    <v-row>
      <Language />
      <Level />
      <!-- <v-row> -->
      <!-- <PlayerHomePage /> -->
      <!-- </v-row> -->
    </v-row>
    <v-row>
      <categories />
    </v-row>
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import PlayerHomePage from "../components/HomePagePlayer.vue";
import PlayList from "../components/Playlist.vue";
import Language from "../components/Language.vue";
import Level from "../components/Level.vue";
import Categories from "../components/Categories.vue";

import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  data: () => {
    return {};
  },

  components: {
    SideBar,
    PlayerHomePage,
    PlayList,
    Language,
    Level,
    Categories,
    Carousel3d,
    Slide,
  },
};
</script>
<style>
.theme--light.v-application {
  background: #18181d;
  color: rgba(0, 0, 0, 0.87);
}
body {
  background-color: #18181d;
}
</style>
