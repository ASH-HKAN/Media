<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <SideBar />
    <v-container>
      <v-app-bar color="rgba(0,0,0,0)" flat class="mt-4">
        <v-row style="position: relative">
          <v-col cols="12" sm="3">
            <v-btn color="orange" outlined>
              <v-icon left>fa fa-upload</v-icon>upload
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Search..."
              filled
              append-icon="mdi-magnify"
              dense
              solo
              dark
            >
            </v-text-field>
          </v-col>
          <v-col cols="6" sm="3">
            <div class="float-right mt-n1">
              <v-btn icon dark class="mr-n8">
                <v-icon color="orange">fas fa-bell</v-icon>
              </v-btn>
              <v-btn icon dark>
                <v-badge bordered overlap color="red" dot class="mr-n8">
                  <v-icon color="#87834">fas fa-envelope</v-icon>
                </v-badge>
              </v-btn>
              <v-btn text color="black">message</v-btn>
              <v-avatar size="23" class="ml-n3">
                <v-img src="../../public/alan.jpg"></v-img>
              </v-avatar>
              <v-btn icon dark class="ml-n3 flex">
                <v-icon x-small color="#878A94">fas fa-chevron-down</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-app-bar>
      <v-div class="d-flex flex-column justify-space-between align-center">
        <v-app-bar class="" color="#2F3346" flat>
          <span class="ml-3 mr-3 white--text">{{ currentTrack.title }}</span>
        </v-app-bar>
      </v-div>
      <carousel-3d :controls-visible="true" :clickable="false" :height="200">
        <slide v-for="(slide, i) in tracks" :index="i" :key="i">
          <figure>
            <img :src="slide.src" />
            <figcaption>
              <v-btn text color="white">{{ slide.artist }}</v-btn>
            </figcaption>
          </figure>
        </slide>
      </carousel-3d>
      <v-div class="d-flex flex-column justify-space-between align-center">
        <v-app-bar class="" color="#2F3346" flat>
          <v-btn text class="white--text" :clickable="false">
            <v-icon left dark color="#878A94">fas fa-caret-right</v-icon>
            2.54M Listeners
          </v-btn>
          <v-btn color="orange" dark>
            <v-icon text color="red" left dark>fas fa-heart</v-icon>
            1.2M
          </v-btn>
          <v-btn color="#1E2337" dark class="ml-2">
            <v-icon left dark>fas fa-retweet</v-icon>
            201k Reposts
          </v-btn>
          <v-btn color="#1E2337" dark class="ml-2">
            <v-icon left dark>fas fa-share-square</v-icon>
            Share
          </v-btn>
          <v-btn color="#1E2337" dark class="ml-2">
            <v-icon left dark>fas fa-ellipsis-h</v-icon>Playlist
          </v-btn>
        </v-app-bar>
      </v-div>

      <v-div class="d-flex flex-column justify-space-between align-center">
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
            <v-card tile color="#1E2337" dark>
              <v-progress-linear
                :value="100"
                class="my-0"
                height="3"
              ></v-progress-linear>
              <v-row>
                <v-col cols="14" sm="2">
                  <v-img
                    src="../../public/alan.jpg"
                    max-height="90"
                    max-width="40"
                    class="mt-4 ml-2"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="1">
                  <h6 class="mt-5 ml-n16 grey--text text--ligten-1">
                    <span class="grey--text text--darken-2"></span>
                  </h6>
                </v-col>
                <v-col cols="12" sm="2">
                  <v-btn icon class="ml-n14 mt-4" @click="prevTrack">
                    <v-icon>mdi-rewind</v-icon>
                  </v-btn>
                  <v-btn icon color="orange" class="mt-4" @click="playPause">
                    <v-icon>
                      color="blue"
                      {{ isPlaying ? "mdi-pause" : "mdi-play" }}
                    </v-icon>
                  </v-btn>
                  <v-btn icon class="mt-4" @click="nextTrack">
                    <v-icon>mdi-fast-forward</v-icon>
                  </v-btn>
                </v-col>

                <v-col cols="12" sm="5">
                  <v-app-bar flat color="gray">
                    <audio ref="audioPlayer" :src="currentTrack.url"></audio>
                    <span class="caption text-9xl ml-n14">01:44</span>
                    <v-slider
                      :max="tracks.duration"
                      color="orange"
                      v-model="currentTime"
                      @change="seek"
                      class="mt-6"
                    ></v-slider>
                    <span class="caption text-9xl">04:30</span>
                  </v-app-bar>
                </v-col>
                <v-col cols="12" sm="1">
                  <v-btn icon class="mt-4">
                    <v-icon small>fas fa-random</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="1">
                  <v-btn icon class="mt-4">
                    <v-icon small>fas fa-undo</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-div>
    </v-container>
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
.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

.next span,
.prev span {
  color: orange;
}
</style>