<template>
  <v-app class="main-app">
    <div class="ttt">
      <v-row class="cat-box">
        <v-col v-for="box in boxes" :key="box.id">
          <v-card
            @click="toggleHover(box.id)"
            class="small-box"
            :class="{ hover: hoverBoxes === box.id }"
          >
            <v-card-text> Box {{ box.id }} </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      boxes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
      hoverBoxes: null,
    };
  },

  methods: {
    toggleHover(boxId) {
      this.hoverBoxes = this.hoverBoxes === boxId ? null : boxId;
    },
  },
};
</script>

<style>
.cat-box {
  width: 752px;
  height: 141px;
  border-radius: 35px;
  background: #1e1e1e;
  margin-right: 20px;
  margin-top: 80px;
}

.small-box {
  margin-top: 20px;
  width: 80px; /* Adjust the width as needed */
  height: 60px; /* Adjust the height as needed */
  background-color: #cccccc; /* Gray background color */
  transition: transform 0.3s ease;
}
.hover {
  transform: scale(1.1);
}

.ttt {
  margin-left: 40px;
}
</style>
