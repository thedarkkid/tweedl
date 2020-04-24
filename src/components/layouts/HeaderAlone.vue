<template>
    <v-app>
        <Header />
        <slot/>
    </v-app>
</template>

<script>
    import Header from "../widgets/Header";
    export default {
        name: "HeaderAlone",
        components: {Header}
    }
</script>

<style scoped>

</style>