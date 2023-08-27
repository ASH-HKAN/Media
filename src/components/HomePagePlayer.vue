<template>
  <div id="HomePagePlayer">
    <v-app>
      <subtitle @clickOnLine="jumpToTime" :currentTime="currentTime" />

      <v-container>
        <div class="test1">
          <div class="test2">
            <div class="test3">
              <img class="test6" src="01.jpg" />
            </div>
            <v-card-title class="track-title">
              <div style="color: aliceblue">
                {{ currentTrack.title }}
              </div>
            </v-card-title>
            <v-slider
              color="orange"
              :max="currentTrack.duration"
              v-model="currentTime"
              @change="seek"
              class="test4"
            >
            </v-slider>

            <v-btn color="orange" icon class="mx-5" @click="backward">
              <v-icon>mdi-rewind</v-icon>
            </v-btn>

            <v-btn color="white" icon large class="mx-2" @click="playPause">
              <v-icon>
                {{ isPlaying ? "mdi-pause" : "mdi-play" }}
              </v-icon>
            </v-btn>

            <v-btn color="orange" icon class="mx-5" @click="forward">
              <v-icon>mdi-fast-forward</v-icon>
            </v-btn>

            <v-btn icon @click="enableLoop" type="button">
              <v-icon color="red">
                {{ isRepeating ? "mdi-repeat-once" : "mdi-repeat-off" }}
              </v-icon>
            </v-btn>
          </div>

          sssssssssssssssssssssssss
        </div>
      </v-container>
    </v-app>
  </div>
</template>
       <script>
export default {
  data() {
    return {
      isPlaying: false,
      isRepeating: false,
      currentTime: 0,

      showVolumeSlider: true,
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

.vol {
  color: #2569d7;
  font-size: 25px;
  font-family: monospace;
  font-weight: bold;
}

.test1 {
  width: 366px;
  height: 557px;
  flex-shrink: 0;
  border-radius: 35px;
  border: 9px solid #000;
  background: #1e1e1e;
}

.test2 {
  border-radius: 30px;
  background: #111114;
}

.test3 {
  width: 171px;
  height: 176px;
  flex-shrink: 0;
  border-radius: 106px;
}

.test4 {
  width: 252px;
  flex-shrink: 0;
  stroke-width: 30px;
  opacity: 1;
}

.test6 {
  width: 171px;
  height: 176px;
  flex-shrink: 0;
  border-radius: 106px;
  background: url(../assets/logo.png),
    lightgray -11px -103.109px / 112.281% 193.874% no-repeat;
}
</style>
  
  