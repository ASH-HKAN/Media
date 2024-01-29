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
          Lesson: "4",
          title: "ENGLISH-A1",
          duration: 393,
          fileName: "ENGLISH-A1",
        },
        {
          Lesson: "5",
          title: "ENGLISH-A2",
          duration: 288,
          fileName: "ENGLISH-A2",
        },
        {
          Lesson: "6",
          title: "ENGLISH-B1",
          duration: 231,
          fileName: "ENGLISH-B1",
        },
        {
          Lesson: "7",
          title: "ENGLISH-B2",
          duration: 182,
          fileName: "ENGLISH-B2",
        },
        {
          Lesson: "8",
          title: "ENGLISH-C1",
          duration: 165,
          fileName: "ENGLISH-C1",
        },
        {
          Lesson: "9",
          title: "ENGLISH-C2",
          duration: 106,
          fileName: "ENGLISH-C2",
        },

        {
          Lesson: "10",
          title: "Deutsch-A1",
          duration: 203,
          fileName: "Deutsch-A1",
        },

        {
          Lesson: "11",
          title: "Deutsch-A2",
          duration: 71,
          fileName: "Deutsch-A2",
        },
        {
          Lesson: "12",
          title: "Deutsch-B1",
          duration: 123,
          fileName: "Deutsch-B1",
        },

        {
          Lesson: "13",
          title: "Deutsch-B2",
          duration: 156,
          fileName: "Deutsch-B2",
        },

        {
          Lesson: "14",
          title: "Deutsch-C1",
          duration: 67,
          fileName: "Deutsch-C1",
        },

        {
          Lesson: "15",
          title: "Deutsch-C2",
          duration: 120,
          fileName: "Deutsch-C2",
        },

        {
          Lesson: "16",
          title: "france-A1",
          duration: 37,
          fileName: "france-A1",
        },

        {
          Lesson: "17",
          title: "france-A2",
          duration: 1094,
          fileName: "france-A2",
        },

        {
          Lesson: "18",
          title: "france-B1",
          duration: 934,
          fileName: "france-B1",
        },

        {
          Lesson: "19",
          title: "france-B2",
          duration: 1163,
          fileName: "france-B2",
        },

        {
          Lesson: "20",
          title: "france-C1",
          duration: 1171,
          fileName: "france-C1",
        },

        {
          Lesson: "21",
          title: "france-C2",
          duration: 1094,
          fileName: "france-C2",
        },
        {
          Lesson: "22",
          title: "italy-A1",
          duration: 72,
          fileName: "italy-A1",
        },
        {
          Lesson: "23",
          title: "italy-A2",
          duration: 140,
          fileName: "italy-A2",
        },
        {
          Lesson: "24",
          title: "italy-B1",
          duration: 111,
          fileName: "italy-B1",
        },
        {
          Lesson: "25",
          title: "italy-B2",
          duration: 150,
          fileName: "italy-B2",
        },
        {
          Lesson: "26",
          title: "italy-C1",
          duration: 178,
          fileName: "italy-C1",
        },
        {
          Lesson: "27",
          title: "italy-C2",
          duration: 210,
          fileName: "italy-C2",
        },

        {
          Lesson: "28",
          title: "spanish-A1",
          duration: 508,
          fileName: "spanish-A1",
        },
        {
          Lesson: "29",
          title: "spanish-A2",
          duration: 87,
          fileName: "spanish-A2",
        },
        {
          Lesson: "30",
          title: "spanish-B1",
          duration: 588,
          fileName: "spanish-B1",
        },
        {
          Lesson: "31",
          title: "spanish-B2",
          duration: 528,
          fileName: "spanish-B2",
        },
        {
          Lesson: "32",
          title: "spanish-C1",
          duration: 582,
          fileName: "spanish-C1",
        },
        {
          Lesson: "33",
          title: "spanish-C2",
          duration: 587,
          fileName: "spanish-C2",
        },
      ],
      audioElement: new Audio(),
      currentTrackIndex: 0,
    };
  },
  components: {
    SideBar,
  },

  props: {},
  methods: {
    playTrack(track) {
      this.$router.push({
        // hP
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
  color: #fc8703;
}
</style>
