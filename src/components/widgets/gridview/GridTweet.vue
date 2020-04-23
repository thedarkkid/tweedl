<template>
    <section>
        <v-card color="#333D4A" dark width="400" min-height="200" max-height="300">
            <v-card-title class="pb-0">
                <v-row>

                        <v-list-item class="grow">
                            <v-row align="center" justify="end">
                                <v-col class="">
                                    <v-icon large left>
                                        mdi-twitter
                                    </v-icon>
                                </v-col>
                                <v-col class="">
                                    <v-icon class="mr-1">mdi-heart</v-icon>
                                    <span class="subheading mr-2 ">256</span>
                                </v-col>
                                <v-col>
                                    <span class="mr-1">·</span>
                                    <v-icon class="mr-1">mdi-share-variant</v-icon>
                                    <span class="subheading">45</span>
                                </v-col>
                            </v-row>
                        </v-list-item>
                </v-row>
            </v-card-title>

            <v-card-text class="headline font-weight-light ">
                    <blockquote>
                        <p class="smaller">
                            {{format_tweet}}
                        </p>
                    </blockquote>
            </v-card-text>
        </v-card>
    </section>
</template>

<script>
    export default {
        name: "GreedTweet",
        data(){
            return{
                tweet: "Lorem ipsum dolor sit amet, consectetur adipisicing ewewe wewew ewdfjje rj wje wii wiierjrj rhrwowke wo dlit. Ab alias, aperiam assumenda natus nostrum provident repellendus.\n" +
                    "                            Accusantium amet, doloremque, ducimus exercitationem laborum minima nisi perspiciatis quasi quidem quos recusandae sunt."
            }
        },
        methods:{

        },
        computed:{
            format_tweet: function(){
                return this.tweet.substr(0, 150)+"....";
            }
        }
    }
</script>

<style scoped>
.smaller{
    font-size: 1.0rem;
}
</style>