<template>
  <v-container
    class="d-flex flex-column align-center justify-end lang-box"
    fluid
  >
    <v-row justify="space-between" align="center">
      <!-- Left Side Boxes -->
      <v-col class="box-positions" cols="4">
        <v-btn class="transparent" style="height: 20px; width: 20px">
          <span style="color: aliceblue">A1</span>
        </v-btn>
      </v-col>

      <v-col class="box-positions" cols="4">
        <v-btn class="transparent" style="height: 20px; width: 20px">
          <span style="color: aliceblue">A2</span>
        </v-btn>
      </v-col>
      <v-col class="box-positions" cols="4">
        <v-btn class="transparent" style="height: 20px; width: 20px">
          <span style="color: aliceblue">B!</span>
        </v-btn>
      </v-col>
      <div class="divider"></div>
      <!-- Right Side Boxes -->
      <v-col class="box-positions" cols="4">
        <v-btn class="transparent" style="height: 20px; width: 20px">
          <span style="color: aliceblue">B2</span>
        </v-btn>
      </v-col>
      <v-col class="box-positions" cols="4">
        <v-btn class="transparent" style="height: 20px; width: 20px">
          <span style="color: aliceblue">C1</span>
        </v-btn>
      </v-col>
      <v-col class="box-positions" cols="4">
        <v-btn class="transparent" style="height: 20px; width: 20px">
          <span style="color: aliceblue">C2</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {};
</script>
  
  <style>
.lang-box {
  margin-top: 447px;
  margin-left: -3740px; /* Adjust the left margin */
  width: 682px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 35px;
  border: 9px solid #000;
  background: #1e1e1e;
}

.box-positions {
  border-radius: 20px;
  border: 2px solid #d63c07;
  flex-shrink: 0;
  background-color: #1e1e1e;
  text-align: center;
  padding: 14px;
  color: aliceblue;
  margin: 7px; /* Add margin to create space between the boxes */
}
.divider {
  width: 1px;
  height: 138px;
  background: #3a3a3a;
}
</style>
  