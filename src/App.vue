<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Level from "./components/Level.vue";
import Language from "./components/Language.vue";
export default {
  name: "App",
  components: {
    Language,
    Level,
  },
  data() {
    return {};
  },
};
</script>
<style>
.v-application--wrap {
  min-height: unset !important;
  flex-direction: unset !important; /* or whatever initial value you prefer */
}
</style>
