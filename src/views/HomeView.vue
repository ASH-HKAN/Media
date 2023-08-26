<template>
  <v-app>
    <SideBar />
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  data: () => {
    return {
      audio: new Audio(),
      isPlaying: false,
      currentTrackIndex: 0,
      audio: null,
      duration: 0,
      currentTime: 0,
      tracks: [
        {
          id: 1,
          title: "Track 1",
          artist: "Alan Walker",
          title: "Track 1",
          url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          src: require("../../public/01.jpg"),
          duration: 200,
        },
        {
          id: 2,
          title: "Track 2",
          artist: "Eminem",
          title: "Track 2",
          url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
          src: require("../../public/02.jpeg"),
          duration: 200,
        },
        {
          id: 3,
          title: "Track 3",
          artist: "shakira",
          title: "Track 3",
          url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
          src: require("../../public/03.png"),
          duration: 200,
        },
      ],
    };
  },

  components: {
    SideBar,
    Carousel3d,
    Slide,
  },

  computed: {
    currentTrack() {
      return this.tracks[this.currentTrackIndex];
    },
  },

  methods: {
    playPause() {
      const audio = this.$refs.audioPlayer;
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    },

    prevTrack() {
      this.currentTrackIndex--;
      if (this.currentTrackIndex < 0) {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.isPlaying = false;
      this.$refs.audioPlayer.load();
    },
    nextTrack() {
      this.currentTrackIndex++;
      if (this.currentTrackIndex >= this.tracks.length) {
        this.currentTrackIndex = 0;
      }
      this.isPlaying = false;
      this.$refs.audioPlayer.load();
    },
    // time and progress methods
    formatTime(seconds) {
      let minutes = Math.floor(seconds / 60);
      seconds = Math.floor(seconds % 60);
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    },
    updateProgress(event) {
      const { duration, currentTime } = event.target;
      this.duration = Math.floor(duration);
      this.currentTime = Math.floor(currentTime);
    },
    seek() {
      if (!this.isPlaying) {
        this.audio.currentTime = this.currentTime;
      }
    },
  },
};
</script>
<style>
.theme--light.v-application {
  background: #18181d;
  color: rgba(0, 0, 0, 0.87);
}
</style>
