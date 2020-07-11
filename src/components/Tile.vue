<template>
    <div :class="[color]">
    </div>
</template>

<script>
export default {
    name: "Tile",
    data() {
        return {
            colors: [
                'blue',
                'green',
                'red',
                'yellow'
            ],
        }
    },
    computed: {
        color() {
            return this.colors[Math.floor(Math.random() * this.colors.length)];
        }
    },
};
</script>

<style scoped lang="scss">

    .square {
        position: relative;
        display: inline-block;
        //width: 9.853vw;
        width: 9.92vw;
        height: 20vh;
        border: solid 1px black;
    }
    .blue {
        background: #2c3e50;
        -moz-box-shadow:    inset 0 0 20px #000000;
        -webkit-box-shadow: inset 0 0 20px #000000;
        box-shadow:         inset 0 0 20px #000000;
    }
    .green {
        background: #008000;
        -moz-box-shadow:    inset 0 0 20px #000000;
        -webkit-box-shadow: inset 0 0 20px #000000;
        box-shadow:         inset 0 0 20px #000000;
    }
    .red {
        background: red;
        -moz-box-shadow:    inset 0 0 20px #000000;
        -webkit-box-shadow: inset 0 0 20px #000000;
        box-shadow:         inset 0 0 20px #000000;
    }
    .yellow {
        background: yellow;
        -moz-box-shadow:    inset 0 0 20px #000000;
        -webkit-box-shadow: inset 0 0 20px #000000;
        box-shadow:         inset 0 0 20px #000000;
    }
</style>