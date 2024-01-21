<template>
  <v-app>
    <SideBar />
    <v-row>
      <Language />
      <Level />
    </v-row>
    <!-- <Categories /> -->

    <HomePlayer />
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import PlayList from "../components/Playlist.vue";
import Language from "../components/Language.vue";
import Level from "../components/Level.vue";
import HomePlayer from "../components/HomePlayer.vue";
import Categories from "../components/Categories.vue";

export default {
  data() {
    return {};
  },

  components: {
    HomePlayer,
    SideBar,
    PlayList,
    Language,
    Level,
    Categories,
  },

  computed: {},
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
