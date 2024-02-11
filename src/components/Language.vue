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
            >
              Persisch
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              @click="pushLanguage(666)"
              class="innerBoxRight"
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
              class="innerBoxRight"
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
              class="innerBoxRight"
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
              class="innerBoxRight"
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
              class="innerBoxRight"
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
        </v-row>
      </v-row>
    </v-container>
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
            >
              LEft
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              @click="pushLanguage(666)"
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
              Spanish
            </v-btn>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Language from "../components/Language.vue";
export default {
  data() {
    return {
      deutsch: false,
      italy: false,
      persian: false,
      france: false,
      spanish: false,
      english: false,
    };
  },
  components: {
    Language,
  },

  methods: {
    pushLanguage(trackCode) {
      const track = this.tracks.find((track) => track.trackCode === trackCode);

      this.deutsch = !this.deutsch;
      this.italy = !this.italy;
      this.persian = !this.persian;
      this.france = !this.france;
      this.spanish = !this.spanish;
      this.english = !this.english;

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

.lang-box-left {
  margin-top: -230px;
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
  margin-left: 40px; /* Adjusted margin */
}
</style>
