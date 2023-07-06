<template>
  <div id="playerPage">
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
      <subtitle
        @clickOnLine="jumpToTime"
        :currentTime="currentTime"
        :path="currentTrack.subPath"
      />

      <v-container>
        <v-div class="d-flex flex-column justify-space-between align-center">
          <v-row>
            <v-col
              cols="12"
              sm="8"
              style="
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                text-align: center;
              "
            >
              <v-card tile color="#ff33f" dark>
                <v-progress-linear
                  indeterminate
                  color="lime"
                  reverse
                ></v-progress-linear>

                <br />

                <v-row>
                  <v-col cols="2" class="mt-2">
                    <v-btn color="orange" icon class="mx-5" @click="backward">
                      <v-icon>mdi-rewind</v-icon>
                    </v-btn>
                    <!-- p/P -->
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
                    <!-- p/P -->
                    <v-btn color="orange" icon class="mx-5" @click="forward">
                      <v-icon>mdi-fast-forward</v-icon>
                    </v-btn>

                    <v-btn color="blue" icon @click="restart">
                      <v-icon>
                        {{ isRestarting ? "mdi-restart" : "mdi-restart" }}
                      </v-icon>
                    </v-btn>

                    <!-- repeat -->
                    <v-btn icon @click="enableLoop" type="button">
                      <v-icon color="red">
                        {{ isRepeating ? "mdi-repeat-once" : "mdi-repeat-off" }}
                      </v-icon>
                    </v-btn>
                    <v-btn @click="checkLoop" type="button">
                      Check loop status
                    </v-btn>
                    <!-- repeat -->
                  </v-col>

                  <v-col cols="12" sm="5">
                    <v-app-bar color="red">
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
                      <v-container fluid>
                        <v-col cols="8">
                          <v-card-title
                            :class="{ 'color-animation': animateTitleColor }"
                            class="track-title"
                          >
                            {{ currentTrack.title }}
                          </v-card-title>
                        </v-col>
                      </v-container>
                      <!-- VOL-->
                      <div class="vol">
                        <v-btn icon @click="toggleVolumeSlider">
                          <v-icon color="orange">
                            {{
                              showVolumeSlider
                                ? "mdi-volume-high"
                                : "mdi-volume-off"
                            }}
                          </v-icon>
                          {{ this.currentVolume }}
                        </v-btn>

                        <input
                          v-if="showVolumeSlider"
                          type="range"
                          v-model="currentVolume"
                          min="0"
                          max="100"
                          @input="setVolume"
                        />
                      </div>
                      <!-- VOL-->
                    </v-app-bar>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-div>
      </v-container>
    </v-app>
  </div>
</template>
     <script>
import subtitle from "./Subtitle.vue";

export default {
  components: { subtitle },
  data() {
    return {
      isPlaying: false,
      isRepeating: false,
      isRestarting: false,
      currentTime: 0,

      showVolumeSlider: false,
      currentVolume: 50,
      volumeIcon: false,

      audioElement: new Audio(),
      currentTrackIndex: 0,

      animateTitleColor: false,
      colorIndex: 0,
      colors: [
        "#fffeff",
        "#ece6e8",
        "#c8aab6",
        "#890f9c",
        "#b40926",
        "#9c0f47",
        "#e3135f",
        "#df1278",
        "#d310dd",
        "#1d22ba",
        "#0d4c87",
        "#12916b",
        "#0da75a",
        "#37ba07",
        "#a1c610",
        "#d7c713",
        "#ff0000",
      ],
    };
  },
  methods: {
    playPause() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.audioElement.src = this.currentTrack.audioPath;
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

    changeTitleColor() {
      const duration = 21000;

      setTimeout(() => {
        this.currentColorIndex =
          (this.currentColorIndex + 1) % this.colors.length;
      }, duration);
    },

    restart() {
      this.isRestarting = !this.isRestarting;
      if (this.isRestarting) {
        this.audioElement.src = this.currentTrack.audioPath;
        this.audioElement.currentTrack = this.currentTime;
        this.audioElement.addEventListener("timeupdate", this.updateTime);
      } else {
        this.audioElement.isNotRestarting();
      }
    },

    setVolume() {
      this.audioElement.volume = this.currentVolume / 100;
    },

    toggleVolumeSlider() {
      console.log(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        this.currentVolume,
        this.showVolumeSlider
      );
      this.showVolumeSlider = !this.showVolumeSlider;
      if (this.currentVolume > 0) {
        this.showVolumeSlider = true;
      }
      if (this.currentVolume === 0) {
        this.showVolumeSlider = false;
      }
    },

    handelKeyPressSpace(event) {
      if (event.keyCode === 32) {
        event.preventDefault();
        this.playPause();
      } else if (event.keyCode === 65) {
        this.backward();
      } else if (event.keyCode === 68) {
        this.forward();
      }
    },

    handelKeyPressVolume(event) {
      if (event.keyCode == 87) 
      event.preventDefault();

      }
    },

    enableLoop() {
      this.isRepeating = !this.isRepeating;
      if (this.isRepeating) {
        this.audioElement.loop = true;
        this.audioElement.onload();
      } else {
        this.audioElement.onload;
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.animateTitleColor = true;
      setTimeout(() => {
        this.colorIndex = (this.colorIndex + 1) % this.colors.length;
        this.animateTitleColor = false;
      }, 200000);
    });

    this.setVolume();

    window.addEventListener("keypress", this.handelKeyPressSpace);
  },

  computed: {
    currentTrack() {
      return {
        title: this.$route.query.title,
        duration: this.$route.query.duration,
        audioPath: this.$route.query.audioPath,
        subPath: this.$route.query.subPath,
      };
    },

    formatTime() {
      let minutes = Math.floor(this.currentTime / 60);
      let seconds = Math.floor(this.currentTime % 60);
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    },

    titleColor() {
      return this.colors[this.currentColorIndex];
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
.track-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 0;
  white-space: nowrap;
}

.color-animation {
  animation: changeColor 200s linear;
}

@keyframes changeColor {
  100% {
    color: #ffffff;
  }

  100% {
    color: #e65507;
  }

  100% {
    color: #ff0000;
  }
  100% {
    color: #d7c713;
  }
  100% {
    color: #a1c610;
  }
  100% {
    color: #37ba07;
  }
  100% {
    color: #0da75a;
  }
  100% {
    color: #12916b;
  }
  100% {
    color: #0d4c87;
  }
  95% {
    color: #1d22ba;
  }
  95% {
    color: #d310dd;
  }

  75% {
    color: #df1278;
  }

  100% {
    color: #e3135f;
  }

  100% {
    color: #9c0f47;
  }

  100% {
    color: #b40926;
  }

  100% {
    color: #890f9c;
  }

  100% {
    color: #c8aab6;
  }
  100% {
    color: #ece6e8;
  }

  100% {
    color: #fffeff;
  }
}
</style>

