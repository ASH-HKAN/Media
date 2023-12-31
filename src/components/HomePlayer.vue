<template>
  <v-app>
    <div class="ss">
      <div class="img"></div>
      <p class="additional-text">Verhältnis</p>

      <p class="additional-text2">Studieren - C1</p>

      <div>
        <v-progress-linear
          color="lime"
          indeterminate
          reverse
        ></v-progress-linear>
      </div>
      <br />

      <v-row>
        <v-btn @click="playPause">
          <v-icon> {{ isplaying ? "mdi-pause " : " mdi-play" }} </v-icon></v-btn
        >
      </v-row>
    </div>
  </v-app>
</template>
  
  <script>
export default {
  components: {},
  data() {
    return {
      isPlaying: false,
      audioElement: new Audio(),
    };
  },

  methods: {
    playPause() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.audioElement.src = this.currentTrack.audioPath;
        this.audioElement.play();
      } else {
        this.audioElement.pause();
      }
    },
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
  },
};
</script>
  
  <style>
.ss {
  color: red;
  width: 358px;
  height: 550px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #111114;
  margin-left: 740px;
  border: 9px solid #000;
  background: #1e1e1e;
}

.img {
  width: 171px;
  height: 176px;
  margin-left: 80px;
  margin-top: 10px;
  flex-shrink: 0;
  border-radius: 106px;
  background: lightgray -11px -103.109px / 112.281% 193.874% no-repeat;
}

.additional-text {
  color: white;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
}
.additional-text2 {
  color: green;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
}
</style>
  





