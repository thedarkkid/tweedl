<template>
    <div>
        <template>
            <v-card
                    class="pa-12 mt-5"
                    color="indigo darken-2"
                    flat
            >
                <v-card
                        elevation="12"
                        width="400"
                >
                    <v-navigation-drawer
                            floating
                            permanent
                    >
                        <v-list
                                dense
                                rounded
                        >
                            <v-list-item
                                    v-for="item in items"
                                    :key="item.title"
                                    link
                            >
                                <v-list-item-icon >
                                    <div v-if="item.has_icon">
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </div>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-navigation-drawer>
                </v-card>
            </v-card>
        </template>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data () {
            return {
                items: [
                    { title: 'Delete Tweets', icon: 'dashboard', has_icon: false },
                    { title: 'View Tweets', icon: 'question_answer', has_icon: true },
                    { title: 'About', icon: 'question_answer', has_icon: true },
                ],
            }
        },
    }
</script>

<style scoped>

</style>