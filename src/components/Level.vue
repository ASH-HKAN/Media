<template>
  <v-container
    class="d-flex flex-column align-center justify-end lang-box"
    fluid
  >
    <v-row justify="space-between" align="center">
      <!-- Left Side Boxes -->
      <v-col cols="4">
        <v-btn class="innerBox" style="background-color: #1e1e1e">
          Level A1
        </v-btn>
        <v-btn class="innerBox" style="background-color: #1e1e1e">
          Level A2
        </v-btn>
        <v-btn class="innerBox" style="background-color: #1e1e1e">
          Level B1
        </v-btn>
      </v-col>
      <div class="divider"></div>

      <!-- Right Side Boxes -->
      <v-col cols="5">
        <v-btn class="innerBox rightSide" style="background-color: #1e1e1e">
          Level B2
        </v-btn>
        <v-btn class="innerBox rightSide" style="background-color: #1e1e1e">
          Level C1
        </v-btn>
        <v-btn class="innerBox rightSide" style="background-color: #1e1e1e">
          Level C2
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
  margin-top: 547px;
  margin-left: -4040px; /* Adjust the left margin */
  width: 402px;
  height: 200px;
  flex-shrink: 0;
  border-radius: 35px;
  border: 9px solid #000;
  background: #1e1e1e;
}

.innerBox {
  border-radius: 20px;
  border: 2px solid #d63c07;
  flex-shrink: 0;
  background-color: #1e1e1e;
  text-align: center;
  padding: 16px; /* Adjust the padding value */
  color: aliceblue;
  margin: 7px; /* Add margin to create space between the boxes */
}

.divider {
  width: 1px;
  height: 138px;
  background: #3a3a3a;
  margin-right: -40px;
}
</style>

