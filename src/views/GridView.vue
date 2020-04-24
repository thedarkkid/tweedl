<template>
    <v-content>
        <v-container fluid>
            <v-row justify="center">
                <v-col sm="12" md="6" lg="4"  xl="3">
                    <GridProfile />
                </v-col>
                <v-col  align-self="start">
                    <GridStat class="ml-1"/>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import GridProfile from "../components/widgets/gridview/GridProfile";
    import GridStat from "../components/widgets/gridview/GridStat";
    export default {
        name: "GridView",
        components: {GridStat, GridProfile}
    }
</script>

<style scoped lang="scss">
@import "src/assets/styles/scss/gridFramework.scss";
</style>