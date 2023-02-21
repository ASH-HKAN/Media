<template>
  <div>
    <v-card>
      <v-container>
        <v-row align="center">
          <v-col cols="2">
            <v-btn icon class="mx-5" @click="backward">
              <v-icon>mdi-rewind</v-icon>
            </v-btn>
            <v-btn icon large class="mx-2" @click="playPause">
              <v-icon>
                {{ isPlaying ? "mdi-pause" : "mdi-play" }}
              </v-icon>
            </v-btn>
            <v-btn icon class="mx-5" @click="forward">
              <v-icon>mdi-fast-forward</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="8">
            <v-card-title>
              {{ currentTrack.title }}
            </v-card-title>
          </v-col>
        </v-row>
        <v-row align="center" class="mt-5">
          {{ formatTime }}
          <v-col cols="12">
            <v-slider
              :max="currentTrack.duration"
              v-model="currentTime"
              @change="seek"
            >
            </v-slider>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <subtitle />
  </div>
</template>
  
  <script>
import subtitle from "./Subtitle.vue";
export default {
  components: { subtitle },
  data() {
    return {
      isPlaying: false,
      currentTime: 0,
      tracks: [
        {
          title: "Eminem",
          duration: 365,
          audioSrc: "/E.mp3",
          
        },
        {
          title: "Sample Track 2",
          duration: 160,
          audioSrc:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        },
        {
          title: "Sample Track 3",
          duration: 300,
          audioSrc:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
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
      debugger
    },
  },
  computed: {
    currentTrack() {
      return this.tracks[this.currentTrackIndex];
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