<template>
  <v-container class="lang-box" fluid>
    <v-row justify="space-between" align="center">
      <!-- Left Side Boxes -->
      <v-col class="box-positions" cols="4" style="height: auto">
        <span style="color: aliceblue">Türkish</span>
      </v-col>
      <v-col class="box-positions" cols="4">
        <span style="color: aliceblue">Türkish</span>
      </v-col>
      <v-col class="box-positions" cols="4">
        <span style="color: aliceblue">Türkish</span>
      </v-col>

      <!-- Right Side Boxes -->
      <v-col class="box-positions" cols="4">
        <span style="color: aliceblue">English</span>
      </v-col>
      <v-col class="box-positions" cols="4">
        <span style="color: aliceblue">English</span>
      </v-col>
      <v-col class="box-positions" cols="4">
        <span style="color: aliceblue">English</span>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {};
</script>
  
  <style scoped>
.lang-box {
  margin-top: 400px;
  margin-left: 400px; /* Adjust the left margin */
  width: calc(5.4% - 10px); /* Adjust the total width */
  border-radius: 35px;
  border: 9px solid #000;
  background: #1e1e1e;
}
.box-positions {
  position: relative;
  border-radius: 32px;
  border: 5px solid #fff;
  flex-shrink: 0;
  background-color: #1e1e1e;
  text-align: center;
  padding: 10px;
  color: aliceblue;
  margin: 10px; /* Add margin to create space between the boxes */
}
</style>
  