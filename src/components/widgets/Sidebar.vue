<template>
    <div>
         <v-card  elevation="5" width="250">
                <v-navigation-drawer floating permanent>
                    <v-list  >
                        <v-list-item v-for="item in items" :key="item.title" link>
                            <v-list-item-icon >
                                <div v-if="item.has_icon">
                                    <v-icon>mdi-{{ item.icon }}</v-icon>
                                </div>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>
                                    <router-link :to="item.link" class="sidebar_item"> {{ item.title }}</router-link>
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-card>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data () {
            return {
            }
        },
        computed: {
            items(){
                return this.$store.state.nav.sidebar;
            }
        }
    }
</script>

<style scoped>

</style>