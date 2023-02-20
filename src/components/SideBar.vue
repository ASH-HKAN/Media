<template>
  <v-navigation-drawer app color="#1E2337" dark>
    <div class="text-center mt-5">
      <v-icon x-large> fab fa-soundcloud</v-icon>
      <v-btn class="mt-3" text color="" outlined>
        Get New soundcloud Accounts
      </v-btn>
    </div>

    <h4 class="mt-6 ml-5 white--text">For You</h4>
    <v-list flat dense class="mt-5">
      <v-list-item-group v-model="selectItem" color="orange">
        <v-list-item v-for="(item, i) in items" :key="i" active-class="border">
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
    <h4 class="mt-6 ml-5 white--text">Collections</h4>
    <v-list-item-group>
      <v-list-item
        v-for="(item, i) in collections"
        :key="i"
        active-class="border"
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
      { icon: "fas fa-satellite-dish", text: "Discover" },
      { icon: "fas fa-stream", text: "Stream" },
      { icon: "fas fa-user", text: "Community" },
      { icon: "fas fa-chart-pie", text: "Statistics" },
    ],
    collections: [
      { icon: "fas fa-heart", text: "Likes", route: "/likes" },
      { icon: "fas fa-music", text: "Playlist", route: "/playlist" },
      { icon: "fas fa-compact-disc", text: "Albums", route: "/albums" },
      { icon: "fas fa-podcast", text: "Podcasts", route: "/podcasts" },
      { icon: "fas fa-users", text: "Following", route: "/following" },
    ],
  }),
};
</script>

<style>
.border {
  border-right: 4px solid orange;
}

button.mt-3.v-btn.v-btn--outlined.v-btn--text.theme--dark.v-size--default {
  border-radius: 30px;
  font-size: 11px;
}
</style>