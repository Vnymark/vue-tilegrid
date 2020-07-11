<template>
    <div class="container">
        <Tile v-for="index in 45" :key="index" v-bind:id="index"></Tile>
    </div>
</template>

<script>
    import Tile from "@/components/Tile.vue";

    export default {
        name: "TileGrid",
        components: {
            Tile,
        }
    }
</script>

<style scoped lang="scss">
    .squares{
        display:inline-block;
    }
</style>