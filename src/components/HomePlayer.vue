<template>
  <v-app>
    <div class="ss">
      <!-- it fill be -->
      <div class="img"></div>
      <p class="additional-text">Verhältnis</p>
      <p class="additional-text2">Studieren - C1</p>
      <!-- it fill be -->

      <v-row class="text-center">
        <v-col>
          <v-slider
            color="#D63C07"
            :max="currentTrack.duration"
            v-model="currentTime"
            @change="seek"
          ></v-slider>
          <!-- vol -->
          <div>
            <v-btn @click="toggleVolume">
              <v-icon>
                {{ volIcon ? "mdi-volume-high" : "mdi-volume-off" }}</v-icon
              >
            </v-btn>
            {{ this.currentVolume }}
            <input
              v-if="volIcon"
              v-model="currentVolume"
              @input="setVolume"
              type="range"
              min="0"
              max="100"
            />
          </div>
          <!-- vol -->
          <v-row style="color: aliceblue; margin-left: 290px">
            {{ this.timeFormat }}
          </v-row>

          <br />
          <br />
          <br />

          <v-btn
            @click="enableLoop"
            type="button"
            :style="{
              width: '0px',
              height: '0px',
              backgroundColor: 'transparent',
              color: '#D63C07',
            }"
          >
            <v-icon>
              {{ this.repeater ? "mdi-repeat-once" : "mdi-repeat-off" }}</v-icon
            >
          </v-btn>
          <!-- back -->
          <v-btn
            @click="backward"
            :style="{
              width: '0px',
              height: '0px',
              backgroundColor: 'transparent',
              color: '#D63C07',
            }"
          >
            <v-icon> mdi-rewind </v-icon>
          </v-btn>
          <!-- back -->

          <!-- p/P -->
          <v-btn
            @click="playPause"
            icon
            :style="{
              borderRadius: '50%',
              width: '56px',
              height: '56px',
              backgroundColor: 'transparent',
              border: '2px solid #fff',
              color: '#D63C07',
            }"
            @mouseover="hovered = true"
            @mouseleave="hovered = false"
          >
            <v-icon> {{ isPlaying ? "mdi-pause " : "mdi-play" }} </v-icon>
          </v-btn>
          <!-- p/P -->

          <v-btn
            :style="{
              width: '0px',
              height: '0px',
              backgroundColor: 'transparent',
              color: '#D63C07',
            }"
            @click="forward"
          >
            <v-icon> mdi-fast-forward</v-icon>
          </v-btn>
        </v-col>
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
      repeater: false,
      hovered: false,
      volIcon: true,
      savedVolume: 0,
      currentTime: 0,
      currentVolume: 50,
      audioElement: new Audio(),
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

    backward() {
      if (this.isPlaying) {
        this.currentTime -= 5;
        this.audioElement.currentTime = this.currentTime;
      } else {
        this.currentTime -= 5;
      }
      console.log(this.currentTime, "back");
    },

    forward() {
      if (this.isPlaying) {
        this.currentTime += 5;
        this.audioElement.currentTime = this.currentTime;
      } else {
        this.currentTime += 5;
      }
      console.log(this.currentTime, "forw");
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

    seek() {
      this.audioElement.currentTime = this.currentTime;
    },

    enableLoop() {
      this.repeater = !this.repeater;
      if (this.repeater) {
        this.audioElement.loop = true;
        this.audioElement.onload();
      } else {
        this.audioElement.onload();
      }
    },

    setVolume() {
      this.audioElement.volume = this.currentVolume / 100;
    },
    toggleVolume() {
      this.volIcon = !this.volIcon;
      if (this.volIcon == false) {
        this.savedVolume = this.currentVolume; // ذخیره کردن حجم فعلی
        this.currentVolume = 0;
      } else {
        this.currentVolume = this.savedVolume; // بازگرداندن حجم ذخیره شده
      }
      this.audioElement.volume = this.currentVolume / 100;
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

    timeFormat() {
      let minutes = Math.floor(this.currentTime / 60);
      let seconds = Math.floor(this.currentTime % 60);
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${minutes} : ${seconds}`;
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
  background: #111114;
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
  





