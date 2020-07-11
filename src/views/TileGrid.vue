<template>
  <div class="container">
    <Tile
      @click.native="flip(index)"
      v-for="index in 50"
      :key="index"
      v-bind:id="index"
      v-bind:class="square"
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
  data: function() {
    return {
      square: 'square'
    };
  },
  methods: {
    async flip(index) {
      this.$children[index-1].$el.classList.toggle('rotated')
      setTimeout(() => {
        this.$children[index-1].$el.classList.toggle('rotated')
      }, 800);
      setTimeout(() => {
        this.flip(index);
      }, 3000);
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: inline-block;
  font-size: 0;
  overflow: hidden;
}
.rotated {
  transition: transform 1s ease-in-out;
  -webkit-transform: rotate3d(0, 1, 0, 60deg);;
  transform: rotate3d(0, 1, 0, 180deg);;
}
</style>
