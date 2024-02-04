<template>
  <div>
    <SideBar />
    <v-list>
      <v-subheader>Playlist</v-subheader>
      <v-list-item
        v-for="(track, index) in tracks"
        :key="index"
        @click="playTrack(track)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ track.title }}</v-list-item-title>
          <v-list-item-subtitle>{{
            formatDuration(track.duration)
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>



<script>
import SideBar from "../components/SideBar.vue";

export default {
  data() {
    return {
      isPlaying: false,
      currentTime: 0,
      currentTrackIndex: 0,
      audioElement: new Audio(),
    };
  },
  components: {
    SideBar,
  },

  methods: {
    playTrack(track) {
      this.$router.push({
        path: "/demo",
        query: {
          title: track.title,
          audioPath: `file/${track.fileName}.mp3`,
          subPath: `file/${track.fileName}.lrc`,
          duration: track.duration,
        },
      });
    },

    formatDuration(duration) {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    },
  },

  computed: {
    tracks() {
      return this.$store.state.tracks;
    },
  },
};
</script>

<style scoped>
.bar {
  width: 261px;
  height: 1125px;
  flex-shrink: 0;
  border-radius: 44px;
  color: #fc8703;
}
</style>
