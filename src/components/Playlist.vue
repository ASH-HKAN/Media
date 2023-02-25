<template>
  <div>
    <v-list>
      <v-subheader>Playlist</v-subheader>
      <v-list-item
        v-for="(track, index) in tracks"
        :key="index"
        @click="playTrack(index)"
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
          title: "Sample Track 2",
          duration: 160,
          fileName:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        },
        {
          Lesson: "3",
          title: "Sample Track 3",
          duration: 300,
          fileName:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
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
        },
        params: {
          audioPath:`file/${track.fileName}.mp3`,
          subPath:`file/${track.fileName}.lrc`,
          title: track.title,
        },
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
