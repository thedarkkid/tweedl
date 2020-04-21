<template>
    <section>
        <v-card flat dark color="#596053" min-width="32 0" max-width="350">

            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title class="headline">@usertag</v-list-item-title>
                    <v-list-item-subtitle>3k tweets</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list class="container" color="#333D4A">
                <v-list-item class="row">
                    <p class="col regular small no-extra"> <span class="bold">30k </span> People Engaged</p>
                    <p class="col regular small no-extra ml-5"> <span class="bold">500 </span> People Muted</p>
                </v-list-item>
                <v-list-item class="row">
                    <p class="col regular small no-extra"> <span class="bold">5k </span> People Blocked<p/>
                    <p class="col regular small no-extra ml-5"> <span class="bold">2k </span> average weekly interactions</p>
                </v-list-item>

            </v-list>

        </v-card>
    </section>
</template>

<script>
    export default {
        name: "StatCard"
    }
</script>

<style scoped lang="scss">
@import "src/assets/styles/scss/_functions.scss";

.stats{
    p{
        color: primary(0.8);
        text-transform: capitalize;
    }

}
</style>