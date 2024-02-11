<template>
  <div>
    <v-container
      class="d-flex flex-column align-center justify-end lang-box-left"
    >
      <v-row justify="space-between" align="center">
        <v-row>
          <v-col cols="6">
            <v-btn
              class="innerBoxLeft"
              style="
                background-color: #1e1e1e;
                border: 2px solid #d63c07;
                color: aliceblue;
                padding: 8px; /* Adjusted padding */
                border-radius: 8px; /* Adjusted border-radius */
                margin-left: 20px;
              "
              @click="playTrack"
            >
              persian
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              @click="handleLanguageClick()"
              class="innerBoxLeft"
              style="
                background-color: #1e1e1e;
                border: 2px solid #d63c07;
                color: aliceblue;
                padding: 12px; /* Adjusted padding */
                border-radius: 8px; /* Adjusted border-radius */
                margin-left: 40px;
              "
            >
              Deutsch
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-btn
              class="innerBoxLeft"
              style="
                background-color: #1e1e1e;
                border: 2px solid #d63c07;
                color: aliceblue;
                padding: 12px; /* Adjusted padding */
                border-radius: 8px; /* Adjusted border-radius */
                margin-left: 20px;
              "
            >
              France
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              class="innerBoxLeft"
              style="
                background-color: #1e1e1e;
                border: 2px solid #d63c07;
                color: aliceblue;
                padding: 12px; /* Adjusted padding */
                border-radius: 8px; /* Adjusted border-radius */
                margin-left: 40px;
              "
            >
              English
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-btn
              class="innerBoxLeft"
              style="
                background-color: #1e1e1e;
                border: 2px solid #d63c07;
                color: aliceblue;
                padding: 12px; /* Adjusted padding */
                border-radius: 8px; /* Adjusted border-radius */
                margin-left: 40px;
              "
            >
              Spanish
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              class="innerBoxLeft"
              style="
                background-color: #1e1e1e;
                border: 2px solid #d63c07;
                color: aliceblue;
                padding: 12px; /* Adjusted padding */
                border-radius: 8px; /* Adjusted border-radius */
                margin-left: 40px;
              "
            >
              italy
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
      deutsch: false,
      italy: false,
      persian: false,
      france: false,
      spanish: false,
      english: false,
      isPlaying: false,
      currentTime: 0,
      currentTrackIndex: 0,
    };
  },

  methods: {
    pushLanguage(trackCode) {
      const track = this.tracks.find((track) => track.trackCode === trackCode);

      if (track) {
        this.$router.push({
          path: "/",
          query: {
            title: track.title,
            audioPath: `file/${track.fileName}.mp3`,
            // subPath: `file/${track.fileName}.lrc`,
            duration: track.duration,
          },
          params: {},
        });
      }
      console.log(track, "dsssssss");
    },
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
.lang-box-left {
  margin-top: 473px;
  margin-left: -775px; /* Adjust the left margin */

  width: 300px; /* Adjust the width as needed */
  height: 230px;
  border-radius: 35px;
  /* border: 9px solid #000; */
  background: #1e1e1e;
}

.innerBoxLeft {
  border-radius: 8px; /* Adjusted border-radius */
  border: 2px solid #d63c07;
  flex-shrink: 0;
  background-color: #1e1e1e;
  text-align: center;
  color: rgb(11, 105, 186);
  margin-left: 25px; /* Adjusted margin */
}
</style>
