<template>
    <v-app>
        <Header/>
        <v-content>
            <v-container fluid>

                <v-row>
                    <v-col cols="2" class="hidden-md-and-down sidebar">
                        <Sidebar />
                    </v-col>
                    <v-col cols="10">
                        <slot/>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Header from "../widgets/Header";
    import Sidebar from "../widgets/Sidebar";
    export default {
        name: "HeaderPlusSidebar",
        components: {Sidebar, Header},
        props: ['page_component']
    }
</script>

<style scoped>
.sidebar{
    padding-left: 1.5%;
}
</style>