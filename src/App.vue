<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
.v-application--wrap {
  min-height: unset !important;
  flex-direction: unset !important; /* or whatever initial value you prefer */
}
</style>
