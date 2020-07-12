<template>
    <div class="square" :class="style">
    </div>
</template>

<script>
export default {
    name: "Tile",
    props: {
      rotate: Boolean
    },
    data() {
        return {
            style: '',
        }
    },
    watch: {
        rotate: {
            handler() {
                this.style = "rotating";
                setTimeout( () =>{
                    this.style = '';
                }, 800)
            },
        },
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
    .rotating {
        transition: transform 1s ease-in-out;
        -webkit-transform: rotate3d(0, 1, 0, 60deg);;
        transform: rotate3d(0, 1, 0, 180deg);;
    }
</style>