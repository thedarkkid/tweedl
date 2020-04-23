<template>
    <HeaderAlone>
        <GridView />
    </HeaderAlone>
</template>

<script>
    import HeaderAlone from "../components/layouts/HeaderAlone";
    import GridView from "../views/GridView";
    export default {
        name: "Grid",
        components: {GridView, HeaderAlone}
    }
</script>

<style scoped>
</style>