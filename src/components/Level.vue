<template>
  <v-container
    class="d-flex flex-column align-center justify-end lang-box"
    fluid
  >
    <v-row justify="space-between" align="center">
      <!-- Left Side Boxes -->
      <v-col cols="4">
        <v-btn
          class="innerBox"
          style="
            background-color: #1e1e1e;
            border: 2px solid #d63c07;
            color: aliceblue;
            padding: 16px;
            border-radius: 20px;
            margin: 7px;
          "
          @click="playTrack(100)"
        >
          A1
        </v-btn>
        <v-btn
          class="innerBox"
          style="
            background-color: #1e1e1e;
            border: 2px solid #d63c07;
            color: aliceblue;
            padding: 16px;
            border-radius: 20px;
            margin: 7px;
          "
          @click="playTrack(101)"
        >
          A2
        </v-btn>
        <v-btn
          class="innerBox rightSide"
          style="
            background-color: #1e1e1e;
            border: 2px solid #d63c07;
            color: aliceblue;
            padding: 16px;
            border-radius: 20px;
            margin: 7px;
          "
          @click="playTrack(102)"
        >
          B1
        </v-btn>
      </v-col>
      <div class="divider"></div>

      <!-- Right Side Boxes -->
      <v-col cols="5">
        <v-btn
          class="innerBox rightSide"
          style="
            background-color: #1e1e1e;
            border: 2px solid #d63c07;
            color: aliceblue;
            padding: 16px;
            border-radius: 20px;
            margin: 7px;
          "
          @click="playTrack(100)"
        >
          B2
        </v-btn>
        <v-btn
          class="innerBox rightSide"
          style="
            background-color: #1e1e1e;
            border: 2px solid #d63c07;
            color: aliceblue;
            padding: 16px;
            border-radius: 20px;
            margin: 7px;
          "
        >
          <div @click="playTrack(103)">C1</div>
        </v-btn>
        <v-btn
          class="innerBox rightSide"
          style="
            background-color: #1e1e1e;
            border: 2px solid #d63c07;
            color: aliceblue;
            padding: 16px;
            border-radius: 20px;
            margin: 7px;
          "
        >
          <v-list-item @click="playTrack(102)"> C2</v-list-item>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
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
          trackCode: 100,
        },
        {
          Lesson: "2",
          title: "Dua Lipa",
          duration: 137,
          fileName: "B",
          trackCode: 101,
        },
        {
          Lesson: "3",
          title: "Anchor",
          duration: 257,
          fileName: "A",
          trackCode: 102,
        },

        {
          Lesson: "3",
          title: "English",
          duration: 393,
          fileName: "T",
          trackCode: 103,
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
      ],
      audioElement: new Audio(),
      currentTrackIndex: 0,
    };
  },

  props: {},
  methods: {
    playTrack(trackCode) {
      const track = this.tracks.find((track) => track.trackCode === trackCode);

      if (track) {
        this.$router.push({
          path: "/",
          query: {
            title: track.title,
            audioPath: `file/${track.fileName}.mp3`,
            subPath: `file/${track.fileName}.lrc`,
            duration: track.duration,
          },
          params: {},
        });
      }
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
.lang-box {
  margin-top: 547px;
  margin-left: -4040px; /* Adjust the left margin */
  width: 402px;
  height: 200px;
  flex-shrink: 0;
  border-radius: 35px;
  border: 9px solid #000;
  background: #1e1e1e;
}

.divider {
  width: 1px;
  height: 138px;
  background: #3a3a3a;
  margin-right: -40px;
}
</style>
