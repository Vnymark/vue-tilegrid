<template>
  <div class="container">
    <Tile
      v-for="index in 50"
      :key="index"
      v-bind:id="index"
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
    return {};
  }
};
</script>

<style scoped lang="scss">
.container {
  display: inline-block;
  font-size: 0;
  overflow: hidden;
}
</style>
