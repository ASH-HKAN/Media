<template>
  <v-container>
    <v-row>
      <v-col v-for="button in buttons" :key="button.id" cols="2">
        <v-btn class="button" :style="{ backgroundColor: button.color }">
          {{ button.label }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {
  data() {
    return {
      buttons: [
        { id: 1, label: "Button 1", color: "#1e1e1e" },
        { id: 2, label: "Button 2", color: "#1e1e1e" },
        { id: 3, label: "Button 3", color: "#1e1e1e" },
        { id: 4, label: "Button 4", color: "#1e1e1e" },
        { id: 5, label: "Button 5", color: "#1e1e1e" },
        { id: 6, label: "Button 6", color: "#1e1e1e" },
      ],
    };
  },
};
</script>
  
  <style scoped>
.button {
  border-radius: 20px;
  border: 2px solid #d63c07;
  flex-shrink: 0;
  background-color: #b01010;
  text-align: center;
  padding: 16px;
  color: aliceblue;
  margin: 7px;
}
</style>
  