<template>
    <section>
        <v-card outlined min-width="320" max-width="350">
            <v-card tile class="mx-auto" >
                <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
                    <v-row align="center" class="fill-height">
                        <v-col cols="4" class="pl-5">
                            <v-avatar size="100" color="grey darken-3">
                                <v-img class="avatar elevation-6" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"/>
                            </v-avatar>
                        </v-col>
                        <v-col class="py-0">
                            <div class="dark_overlay">
                                <v-list-item color="rgba(0, 0, 0, 1)" dark>
                                    <v-list-item-content>
                                        <v-list-item-title class="title">User</v-list-item-title>
                                        <v-list-item-subtitle>@usertag</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </div>

                        </v-col>
                    </v-row>
                </v-img>
            </v-card>
            <v-card-actions>
                <v-card-text class="">
                    <span class="bold">0 </span>
                    <span class="text-uppercase">followers</span>
                </v-card-text>
                <v-card-text class="">
                    <span class="bold">0</span>
                    <span class="text-uppercase"> following</span>
                </v-card-text>
                <v-spacer/>

                <v-btn depressed outlined dark ripple color="indigo lighten-1" @click="show = !show">
                    <span>bio</span>
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider/>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dicta facilis illo molestias perferendis placeat recusandae repellat sit vitae voluptas. Ad animi doloribus libero quis sed ullam unde veritatis vitae.
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </section>
</template>

<script>
    export default {
        name: "GridProfile",
        data(){
            return{
                show: false,
            }
        }
    }
</script>

<style scoped lang="scss">

</style>