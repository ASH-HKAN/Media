<template>
  <div>
    <v-container
      class="d-flex flex-column align-center justify-end lang-box-right"
    >
      <v-row justify="space-between" align="center">
        <v-row>
          <v-col cols="6">
            <v-btn
              class="innerBoxRight"
              style="
                background-color: #1e1e1e;
                border: 2px solid #d63c07;
                color: aliceblue;
                padding: 8px; /* Adjusted padding */
                border-radius: 8px; /* Adjusted border-radius */
                margin-left: 20px;
              "
              @click="playTrack(100)"
            >
              A1
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              class="innerBoxRight"
              style="
                background-color: #1e1e1e;
                border: 2px solid #d63c07;
                color: aliceblue;
                padding: 12px; /* Adjusted padding */
                border-radius: 8px; /* Adjusted border-radius */
                margin-left: 40px;
              "
              @click="playTrack(101)"
            >
              A2
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-btn
              class="innerBoxRight"
              style="
                background-color: #1e1e1e;
                border: 2px solid #d63c07;
                color: aliceblue;
                padding: 12px; /* Adjusted padding */
                border-radius: 8px; /* Adjusted border-radius */
                margin-left: 20px;
              "
              @click="playTrack(102)"
            >
              B1
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              class="innerBoxRight"
              style="
                background-color: #1e1e1e;
                border: 2px solid #d63c07;
                color: aliceblue;
                padding: 12px; /* Adjusted padding */
                border-radius: 8px; /* Adjusted border-radius */
                margin-left: 40px;
              "
              @click="playTrack(100)"
            >
              B2
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-btn
              class="innerBoxRight"
              style="
                background-color: #1e1e1e;
                border: 2px solid #d63c07;
                color: aliceblue;
                padding: 12px; /* Adjusted padding */
                border-radius: 8px; /* Adjusted border-radius */
                margin-left: 40px;
              "
              @click="playTrack(103)"
              >C1
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              class="innerBoxRight"
              style="
                background-color: #1e1e1e;
                border: 2px solid #d63c07;
                color: aliceblue;
                padding: 12px; /* Adjusted padding */
                border-radius: 8px; /* Adjusted border-radius */
                margin-left: 40px;
              "
              @click="playTrack(102)"
            >
              C2
            </v-btn>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isPlaying: false,
      currentTime: 0,
      currentTrackIndex: 0,
    };
  },

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

  computed: {
    tracks() {
      return this.$store.state.tracks;
    },
  },
};
</script>


<style scoped>
.lang-box-right {
  margin-top: 470px;
  margin-left: -460px; /* Adjust the left margin */
  width: 440px; /* Adjust the width as needed */
  height: 230px;
  flex-shrink: 0;
  border-radius: 35px;
  background: #1e1e1e;
}

.innerBoxRight {
  border-radius: 8px; /* Adjusted border-radius */
  border: 2px solid #d63c07;
  flex-shrink: 0;
  background-color: #1e1e1e;
  text-align: center;
  color: rgb(11, 105, 186);
  margin-left: 40px; /* Adjusted margin */
}

.divider {
  width: 1px;
  height: 138px;
  background: #3a3a3a;
  margin-right: -40px;
}
</style>
