<template>
    <div class="square">
        Test
    </div>
</template>

<script>
export default {
    name: "Tile",
    methods: {
        changeColor() {

        }
    }
};
</script>

<style scoped lang="scss">

    .square {
        position: relative;
        display: inline-block;
        width: 20vh;
        height: 19.5vh;
        border: solid 1px red;
        background: #2c3e50;
    }
    .body {
        background: #2c3e50;
    }
</style>