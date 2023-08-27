<template>
  <v-app>
    <SideBar />
    <PlayerHomePage />
    <playlist />
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import PlayerHomePage from "../components/HomePagePlayer.vue";
import PlayList from "../components/Playlist.vue";

import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  data: () => {
    return {};
  },

  components: {
    SideBar,
    PlayerHomePage,
    PlayList,
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
</style>
