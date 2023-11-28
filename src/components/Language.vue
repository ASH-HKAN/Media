<template>
  <v-container id="language" class="lang-box" fluid>
    <v-row justify="space-between" align="center">
      <!-- Left Side Boxes -->

      <v-col class="box-positions" cols="4">
        <v-btn class="transparent" style="height: 100%; width: 100%">
          <span style="color: aliceblue">Eniglish</span>
        </v-btn>
      </v-col>
      <v-col class="box-positions" cols="4">
        <v-btn class="transparent" style="height: 100%; width: 100%">
          <span style="color: aliceblue">Deutsch</span>
        </v-btn>
      </v-col>
      <v-col class="box-positions" cols="4">
        <v-btn class="transparent" style="height: 100%; width: 100%">
          <span style="color: aliceblue">Türkish</span>
        </v-btn>
      </v-col>

      <!-- Right Side Boxes -->
      <v-col class="box-positions" cols="4">
        <v-btn class="transparent" style="height: 100%; width: 100%">
          <span style="color: aliceblue">Persian</span>
        </v-btn>
      </v-col>
      <v-col class="box-positions" cols="4">
        <v-btn class="transparent" style="height: 100%; width: 100%">
          <span style="color: aliceblue">France</span>
        </v-btn>
      </v-col>
      <v-col class="box-positions" cols="4">
        <v-btn class="transparent" style="height: 100%; width: 100%">
          <span style="color: aliceblue">Spanish</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {};
</script>
  
  <style scoped>
.lang-box {
  margin-top: 546px;
  margin-left: 10px; /* Adjust the left margin */
  width: calc(6.4% - 10px); /* Adjust the total width */
  border-radius: 35px;
  border: 9px solid #000;
  background: #1e1e1e;
}
.box-positions {
  position: relative;
  border-radius: 20px;
  border: 5px solid #fff;
  flex-shrink: 0;
  background-color: #1e1e1e;
  text-align: center;
  padding: 13px;
  color: aliceblue;
  margin: 10px; /* Add margin to create space between the boxes */
}
</style>
  