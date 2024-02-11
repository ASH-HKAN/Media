<template>
  <v-app>
    <SideBar />
    <v-row>
      <div class="tt">
        <Categories />
      </div>
      <LanguageAndLevel />
      <div class="hp">
        <HomePlayer />
      </div>
    </v-row>
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import PlayList from "../components/Playlist.vue";
import LanguageAndLevel from "../components/LanguageAndLevel.vue";
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
    LanguageAndLevel,
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

.tt {
  margin-top: 239px;
}

.hp {
  margin-top: 150px;
  margin-left: 10px;
}
</style>
