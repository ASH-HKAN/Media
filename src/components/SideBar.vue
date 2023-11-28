<template>
  <v-navigation-drawer
    app
    color="gray"
    dark
    class="sideBar flex"
    :clipped="isClipped"
  >
    <h4 class="mt-6 ml-5 white--text">Menu</h4>

    <v-list flat dense class="mt-5">
      <v-list-item-group v-model="selectItem" color="orange">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="redirectTo(item.route)"
          class="typography"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-divider class="mx-20"></v-divider>
    <h4 class="mt-6 ml-5 white--text">Library</h4>
    <v-list-item-group>
      <v-list-item
        v-for="(item, i) in collections"
        :key="i"
        active-class="border"
        @click="redirectTo(item.route)"
        class="typography"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="mx-20"></v-divider>
      <h4 class="mt-6 ml-5 white--text">Account</h4>

      <v-list-item
        v-for="(item, i) in account"
        :key="i"
        active-class="border"
        @click="redirectTo(item.route)"
        class="typography"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectItem: 0,
    drawer: null,
    items: [
      { icon: "fas fa-home", text: "Explor", route: "/Explor" },
      { icon: "fas fa-stream", text: "Categories" },
    ],
    collections: [
      { icon: "fas fa-heart", text: "Recent", route: "/Recent" },
      { icon: "fas fa-music", text: "Playlist", route: "/Playlist" },
      { icon: "fas fa-compact-disc", text: "Favourites", route: "/Favourites" },
      { icon: "fas fa-podcast", text: "Most played", route: "/Most_Played" },
      { icon: "fas fa-users", text: "Following", route: "/following" },
    ],

    account: [
      { icon: "fas fa-heart", text: "PROFILE", route: "/PROFILE" },
      { icon: "fas fa-music", text: "FAQs", route: "/FAQs" },
      { icon: "fas fa-compact-disc", text: "Favourites", route: "/Favourites" },
      { icon: "fas fa-podcast", text: "SETTING", route: "/SETTING" },
      { icon: "fas fa-users", text: "CONTACT US", route: "/CONTACT_US" },
    ],
  }),

  methods: {
    redirectTo(route) {
      // Use your preferred method for redirection
      this.$router.push(route);
    },
  },
};
</script>

<style>
.sideBar {
  width: 300px;
  height: 100%;

  top: 8px;
  left: 5px;

  border-radius: 35px;
  border: 9px solid #000;
  background: #1e1e1e;
}

button.mt-3.v-btn.v-btn--outlined.v-btn--text.theme--dark.v-size--default {
  border-radius: 30px;
  font-size: 11px;
}

.typography {
  color: #fff;
  font-family: NATS;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.48;
}
</style>