<template>
  <div>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
      <subtitle
        @clickOnLine="jumpToTime"
        :currentTime="currentTime"
        :path="$route.query.subPath"
      />
    </v-app>
    <v-container>
      <v-div>
        <v-row>
          <v-col
            cols="12"
            sm="8"
            style="
              position: absolute;
              bottom: 0;
              margin-left: auto;
              margin-right: auto;
              left: 0;
              right: 0;
              text-align: center;
            "
          >
            <v-card tile color="#1E2337" dark class="player">
              <v-progress-linear
                :value="100"
                class="my-0"
                height="3"
              ></v-progress-linear>
              <v-row>
                <v-col cols="2" class="mt-2">
                  <v-btn color="orange" icon class="mx-5" @click="backward">
                    <v-icon>mdi-rewind</v-icon>
                  </v-btn>
                  <v-btn
                    color="blue"
                    icon
                    large
                    class="mx-2"
                    @click="playPause"
                  >
                    <v-icon>
                      {{ isPlaying ? "mdi-pause" : "mdi-play" }}
                    </v-icon>
                  </v-btn>
                  <v-btn color="orange" icon class="mx-5" @click="forward">
                    <v-icon>mdi-fast-forward</v-icon>
                  </v-btn>
                </v-col>

                <v-col cols="12" sm="5">
                  <v-app-bar flat color="#1E2337">
                    <v-row align="center" class="mt-4">
                      <v-col cols="12">
                        <v-slider
                          color="blue"
                          :max="currentTrack.duration"
                          v-model="currentTime"
                          @change="seek"
                        >
                        </v-slider>
                        <div class="timer">
                          {{ formatTime }}
                        </div>
                      </v-col>
                    </v-row>
                    <v-col cols="8">
                      <v-card-title>
                        {{ currentTrack.title }}
                      </v-card-title>
                    </v-col>
                  </v-app-bar>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-div>
    </v-container>
  </div>
</template>
     <script>
import subtitle from "./Subtitle.vue";
import Playlist from "./Playlist.vue";

export default {
  components: { subtitle, Playlist },
  data() {
    return {
      isPlaying: false,
      currentTime: 0,
      tracks: [
        {
          title: "Eminem",
          duration: 365,
          audioSrc: "file/E.mp3",
        },
        {
          title: "Dua Lipa",
          duration: 365,
          audioSrc: "file/B.mp3",
        },
        {
          title: "Anchor",
          duration: 365,
          audioSrc: "file/A.mp3",
        },
      ],
      audioElement: new Audio(),
      currentTrackIndex: 0,
    };
  },
  methods: {
    playPause() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.audioElement.src = this.currentTrack.audioSrc;
        this.audioElement.play();
        this.audioElement.currentTime = this.currentTime;
        this.audioElement.addEventListener("timeupdate", this.updateTime);
      } else {
        this.audioElement.pause();
      }
    },
    updateTime() {
      this.currentTime = this.audioElement.currentTime;
      if (this.currentTime >= this.currentTrack.duration) {
        this.isPlaying = false;
        this.audioElement.pause();
        this.currentTime = 0;
        this.audioElement.currentTime = 0;
      }
    },

    backward() {
      if (this.isPlaying) {
        this.currentTime -= 5;
        this.audioElement.currentTime = this.currentTime;
      } else {
        this.currentTime -= 5;
      }
    },

    forward() {
      if (this.isPlaying) {
        this.currentTime += 5;
        this.audioElement.currentTime = this.currentTime;
      } else {
        this.currentTime += 5;
      }
    },

    seek() {
      this.audioElement.currentTime = this.currentTime;
    },

    jumpToTime(time) {
      this.audioElement.currentTime = time - 0.5;
      this.currentTime = time - 0.5;
    },
  },
  computed: {
    currentTrack() {
      return this.tracks[this.currentTrackIndex];
    },
    aaa() {
      debugger;
      return this.$route;
    },

    formatTime() {
      let minutes = Math.floor(this.currentTime / 60);
      let seconds = Math.floor(this.currentTime % 60);
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    },
  },
};
</script>
<style scoped>
.timer {
  margin-top: -20px;
  margin-left: 700px;
  color: orange;
}
</style>

