<template>
  <v-app>
    <SideBar />
    <v-row>
      <Language />
      <Level />
    </v-row>
    <HomePlayer />
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import PlayList from "../components/Playlist.vue";
import Language from "../components/Language.vue";
import Level from "../components/Level.vue";
// import Categories from "../components/Categories.vue";
import HomePlayer from "../components/HomePlayer.vue";

// import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  data: () => {
    return {
      audioElement: new Audio(),
    };
  },

  components: {
    HomePlayer,
    SideBar,
    PlayList,
    Language,
    Level,
    // Categories,
    // Carousel3d,
    // Slide,
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
