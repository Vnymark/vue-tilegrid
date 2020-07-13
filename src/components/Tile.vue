<template>
  <div class="square" :class="style"></div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    rotate: Boolean
  },
  data() {
    return {
      style: ""
    };
  },
  watch: {
    rotate: {
      handler() {
        this.style = "rotating";
        setTimeout(() => {
          this.style = "";
        }, 800);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.square {
  position: relative;
  display: inline-block;
  @media (orientation: landscape) {
    width: 9.9%;
    height: 20%;
  }
  @media (orientation: portrait) {
    width: 19.43%;
    height: 9.9%;
  }
  border: solid 1px black;
  color: #42b983;
}

.blue {
  background: #2b3e75;
  -moz-box-shadow: inset 0 0 20px #000000;
  -webkit-box-shadow: inset 0 0 20px #000000;
  box-shadow: inset 0 0 20px #000000;
}
.green {
  background: #2b3e75;
  -moz-box-shadow: inset 0 0 20px #000000;
  -webkit-box-shadow: inset 0 0 20px #000000;
  box-shadow: inset 0 0 20px #000000;
}
.red {
  background: #2b3e75;
  -moz-box-shadow: inset 0 0 20px #000000;
  -webkit-box-shadow: inset 0 0 20px #000000;
  box-shadow: inset 0 0 20px #000000;
}
.yellow {
  background: #2b3e75;
  -moz-box-shadow: inset 0 0 20px #000000;
  -webkit-box-shadow: inset 0 0 20px #000000;
  box-shadow: inset 0 0 20px #000000;
}
.rotating {
  transition: transform 1s ease-in-out;
  -webkit-transform: rotate3d(0, 1, 0, 60deg);
  transform: rotate3d(0, 1, 0, 180deg);
}
</style>
