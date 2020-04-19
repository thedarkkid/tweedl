<template>
        <div>
            <v-app-bar flat color="indigo" dark>
                <span class="hidden-md-and-up">
                    <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                                <v-app-bar-nav-icon/>
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item v-for="item in items" :key="item.title" @click="() => {}" >
                                    <router-link :to="item.link" class="sidebar_item"> {{ item.title }}</router-link>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </span>

                <v-toolbar-title>Tweedl</v-toolbar-title>

                <v-spacer/>

                <ul class="nav-list hidden-md-and-down" >
                    <li class="nav-list-item" v-for="item in nav" :key="item.title" @click="() => {}" >
                        <router-link :to="item.link"> {{ item.title }}</router-link>
                    </li>
                </ul>

            </v-app-bar>
        </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {

            };
        },
        computed: {
            items(){
                return this.$store.state.nav.sidebar.concat(this.$store.state.nav.header);
            },
            nav(){
                return this.$store.state.nav.header;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/styles/scss/_variables.scss";

    .nav-list{
        color: $primary;
        display: flex;
        .nav-list-item{
            display: inline-list-item;
            list-style: none;
            margin: 0 10px;
            padding: 2px 10px;
            border-radius: 3px;
            &:hover{
                background: #3d4a92;
                cursor: pointer;
            }
            a{
                color: white;
                text-decoration: none;
                font-size: small;
            }
        }

    }
</style>