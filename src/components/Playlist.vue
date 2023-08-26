<template>
  <div>
    <div class="bar">ljabcjk</div>

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
          duration: 137,
          fileName: "B",
        },
        {
          Lesson: "3",
          title: "Anchor",
          duration: 257,
          fileName: "A",
        },

        {
          Lesson: "3",
          title: "English",
          duration: 393,
          fileName: "T",
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
.bar {
  width: 261px;
  height: 1125px;
  flex-shrink: 0;
  border-radius: 44px;
  color: #FC8703;
}
</style>
