<template>
  <div class="container">
    <Tile
      v-for="child in this.children"
      :key="child.id"
      v-bind:id="child.id"
      v-bind:class="child.color"
      :rotate="child.rotate"
    >
    </Tile>
  </div>
</template>

<script>
import Tile from "@/components/Tile.vue";

export default {
  name: "TileGrid",
  components: {
    Tile
  },
  created() {
    for (let i = 1; i <= 200; i++) {
      this.children.push({
        id: i,
        color: this.getColor(),
        rotate: false
      });
    }
  },
  data: function() {
    return {
      colors: ["blue", "green", "red", "yellow"],
      children: []
    };
  },
  methods: {
    flip() {
      let index = Math.floor(Math.random() * this.children.length);
      this.children[index].rotate = true;
      setTimeout(() => {
        this.children[index].color = this.getColor();
      }, 500);
      setTimeout(() => {
        this.children[index].rotate = false;
      }, 800);
    },
    getColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    }
  },
  mounted() {
    setInterval(() => {
      this.flip();
    }, 6000);
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  font-size: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
</style>
