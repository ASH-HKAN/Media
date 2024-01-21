<!-- <template>
  <v-app class="main-app">
    <v-container fluid>
      <v-card>
        <v-card-text>
          <v-row>
            <v-col v-for="(box, index) in boxes" :key="index" class="box-col">
              <v-row>
                <v-col>
                  <v-card
                    @click="toggleHover(index)"
                    :class="{ hover: hoverIndex === index }"
                    class="small-box"
                  >
                    <v-card-text> Box {{ index + 1 }} </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      boxes: [1, 2, 3, 4, 5, 6],
      hoverIndex: null,
    };
  },
  methods: {
    toggleHover(index) {
      this.hoverIndex = this.hoverIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.main-app {
  background-color: #66bb6a; /* Green background color */
}

.box-col {
  flex: 1;
  padding: 10px;
}

.small-box {
  width: 80px; /* Adjust the width as needed */
  height: 60px; /* Adjust the height as needed */
  background-color: #cccccc; /* Gray background color */
  transition: transform 0.3s ease;
}

.hover {
  transform: scale(1.1);
}
</style> -->s
<template>
  <v-app class="main-app">
    <v-container fluid>
      <v-row class="cat-box">
        <v-col v-for="(box, cat) in boxes" :key="cat">
          <v-card
            @click="toggleHover(cat)"
            class="small-box"
            :class="{ hover: hoverBoxes === cat }"
          >
            <v-card-text> Box {{ cat + 1 }} </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
 <script>
export default {
  data() {
    return {
      boxes: [1, 2, 3, 4, 5, 6],
      hoverBoxes: null,
    };
  },

  methods: {
    toggleHover(cat) {
      this.hoverBoxes = this.hoverBoxes === cat ? null : cat;
    },
  },
};
</script>
 
 <style>
.cat-box {
  width: 752px;
  height: 231px;
  flex-shrink: 0;
  border-radius: 35px;
  background: #1e1e1e;
}

.small-box {
  width: 80px; /* Adjust the width as needed */
  height: 60px; /* Adjust the height as needed */
  background-color: #cccccc; /* Gray background color */
  transition: transform 0.3s ease;
}
.hover {
  transform: scale(1.1);
}
</style>