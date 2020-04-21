<template>
    <section>
        <v-row>
            <v-col cols="12" lg="4" xl="3" sm="6" md="6" v-for="item in items" :key="item.no">
                <SingleTweet />
            </v-col>
        </v-row>
    </section>
</template>

<script>
    import SingleTweet from "./SingleTweet";
    export default {
        name: "Tweets",
        components: {SingleTweet},
        data(){
            return {
                items: [
                    {no:1},
                    {no:2},
                    {no:3},
                    {no:4},
                    {no:4},
                ]
            }
        }
    }
</script>

<style scoped>

</style>