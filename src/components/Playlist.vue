<template>
  <div>
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
export default {
  data() {
    return {
      isPlaying: false,
      currentTime: 0,
      tracks: [
        {
          Lesson: "1",
          title: "Eminem",
          duration: 365,
          fileName: "E",
        },
        {
          Lesson: "2",
          title: "Dua Lipa",
          duration: 160,
          fileName: "B",
        },
        {
          Lesson: "3",
          title: "Anchor",
          duration: 300,
          fileName: "A",
        },
      ],
      audioElement: new Audio(),
      currentTrackIndex: 0,
    };
  },

  props: {},
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
        params: {},
      });
    },

    formatDuration(duration) {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    },
  },
};
</script>

<style scoped>
.v-list-item--active {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
