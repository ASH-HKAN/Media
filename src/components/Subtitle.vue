<template>
  <div>
    <div class="subtitl-nav">
      <div
        v-for="(line, index) in lyrics"
        :key="index"
        :id="'lineNum' + index"
        @click="$emit('clickOnLine', line.time)"
        :class="{
          'is-played': line.time < currentTime,
          'current-line':
            line.time < currentTime && lyrics[index + 1].time > currentTime,
        }"
      >
        {{ line.text }}
      </div>
    </div>
    <p>Current line index: {{ currentIndex }}</p>
  </div>
</template>

<script>
import axios from "axios";
import lrc2Json from "../plugins/Lrc2Json";

export default {
  name: "subtitle",
  props: {
    currentTime: 0,
    path: "",
  },

  data() {
    return {
      lyrics: [],
    };
  },

  computed: {
    currentIndex() {
      // Find the index of the line with the closest time value to the current time
      const index = this.lyrics.findIndex((line, i, arr) => {
        const nextLine = arr[i + 1];
        return (
          line.time <= this.currentTime &&
          (!nextLine || nextLine.time > this.currentTime)
        );
      });
      // Return the index if found, otherwise -1
      return index !== -1 ? index : -1;
    },
  },
  watch: {
    currentIndex(newVal) {
      document.getElementById("lineNum" + newVal).scrollIntoView();
    },
  },

  mounted() {
    axios
      .get(this.path)
      .then((response) => {
        // this.fileContents = response.data;
        this.lyrics = lrc2Json(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const lrc =
      "[00:00.00]Verse 1\n[00:14.20]Verse 2\n[00:28.40]Chorus\n[00:40.10]Verse 3\n[00:54.30]Chorus\n[01:06.00]Bridge\n[01:18.20]Chorus\n";
    this.sub = lrc2Json(lrc);
  },
};
</script>

<style >
.subtitl-nav {
  height: 600px;
  overflow: auto;
  color: orange;
}

.is-played {
  color: white;
}
.current-line {
  color: red;
}
</style>




