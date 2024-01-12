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
        >
          Level A1
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
        >
          Level A2
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
        >
          Level C2</v-btn
        >
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
        >
          Level B2
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
          Level C1
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
        path: "/",
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
