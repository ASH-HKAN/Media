<template>
  <v-app id="inspire" :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar />

  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";

export default {
  name: "App",

  data: () => ({

    siides: [
      {
        src: require('../../public/alan.jpg'), text: 'Alan Walker',
        src: require('../../public/emin.jpg'), text: 'Eminem'
      }
    ]

  }),

  components: {
    SideBar,
  },
};
</script>
