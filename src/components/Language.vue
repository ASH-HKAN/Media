<template>
  <v-container
    class="d-flex flex-column align-center justify-end lang-box"
    fluid
  >
    <v-row justify="space-between" align="center">
      <v-row>
        <v-col cols="6">
          <v-btn
            class="innerBox"
            style="
              background-color: #1e1e1e;
              border: 2px solid #d63c07;
              color: aliceblue;
              padding: 8px; /* Adjusted padding */
              border-radius: 8px; /* Adjusted border-radius */
              margin-left: 20px;
            "
          >
            Persisch
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn
            @click="pushLanguage"
            class="innerBox"
            style="
              background-color: #1e1e1e;
              border: 2px solid #d63c07;
              color: aliceblue;
              padding: 12px; /* Adjusted padding */
              border-radius: 8px; /* Adjusted border-radius */
              margin-left: 40px;
            "
          >
            Deutsch
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-btn
            class="innerBox"
            style="
              background-color: #1e1e1e;
              border: 2px solid #d63c07;
              color: aliceblue;
              padding: 12px; /* Adjusted padding */
              border-radius: 8px; /* Adjusted border-radius */
              margin-left: 20px;
            "
          >
            France
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn
            class="innerBox"
            style="
              background-color: #1e1e1e;
              border: 2px solid #d63c07;
              color: aliceblue;
              padding: 12px; /* Adjusted padding */
              border-radius: 8px; /* Adjusted border-radius */
              margin-left: 40px;
            "
          >
            English
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-btn
            style="
              background-color: #1e1e1e;
              border: 2px solid #d63c07;
              color: aliceblue;
              padding: 12px; /* Adjusted padding */
              border-radius: 8px; /* Adjusted border-radius */
              margin-left: 30px;
            "
          >
            Italy
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn
            class="innerBox"
            style="
              background-color: #1e1e1e;
              border: 2px solid #d63c07;
              color: aliceblue;
              padding: 12px; /* Adjusted padding */
              border-radius: 8px; /* Adjusted border-radius */
              margin-left: 40px;
            "
          >
            Spanish
          </v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      deutsch: false,
      italy: false,
      persian: false,
      france: false,
      spanish: false,
      english: false,
    };
  },

  methods: {
    pushLanguage(selectLanguage) {
      this.deutsch = !this.deutsch;
      this.italy = !this.italy;
      this.persian = !this.persian;
      this.france = !this.france;
      this.spanish = !this.spanish;
      this.english = !this.english;

      if(this.deutsch){
this.$router.push({

path : "/",
query:{



  
}



})



      }
    },
  },
};
</script>

<style scoped>
.lang-box {
  margin-top: 548px;
  margin-left: 20px; /* Adjust the left margin */
  width: 300px; /* Adjust the width as needed */
  height: 200px;
  flex-shrink: 0;
  border-radius: 35px;
  border: 9px solid #000;
  background: #1e1e1e;
}

.innerBox {
  border-radius: 8px; /* Adjusted border-radius */
  border: 2px solid #d63c07;
  flex-shrink: 0;
  background-color: #1e1e1e;
  text-align: center;
  color: rgb(11, 105, 186);
  margin-left: 15px; /* Adjusted margin */
}
</style>
