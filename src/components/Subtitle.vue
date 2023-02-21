<template>
  <div>
    <div>
      <div v-for="(line, index) in lyrics" :key="index">{{ line.text }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import lrc2Json from "../plugins/Lrc2Json";

export default {
  name: "subtitle",
  data() {
    return {
      lyrics: [],
    };
  },

  mounted() {
    axios
      .get("/E.lrc")
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

<style>
</style>