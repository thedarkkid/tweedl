<template>
    <section>
        <v-container fluid>
            <v-row>
                <v-col>
                    <h1 class="heading">Profile</h1>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col sm="12" md="6" lg="4"  xl="3">
                    <ProfileCard/>
                </v-col>
                <v-col  align-self="start">
                    <StatCard class="ml-1"/>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <h1 class="heading">Recents Tweets</h1>
                    <Tweets />
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
// @ is an alias to /src
import ProfileCard from "../components/widgets/homeview/ProfileCard";
import StatCard from "../components/widgets/homeview/StatCard";
import Tweets from "../components/widgets/homeview/Tweets";
export default {
  name: 'HomeView',
  components: {
      Tweets,
   StatCard,
   ProfileCard
  }
}
</script>

<style  lang="scss">
 @import "src/assets/styles/scss/_variables.scss";
 @import "src/assets/styles/scss/_mixins.scss";
 @import "src/assets/styles/scss/_functions.scss";
 @import "src/assets/styles/scss/_utility.scss";

 .sidebar_item{
  font-size: small;
  margin: 0;
  color: $primary !important;
  text-decoration: none;
  &:hover{
  }
 }

 .heading{
  color: $main_text;
  font-weight: normal;
 }

 .avatar{
  border: white 3px solid;
 }

 section{
  margin: 0;
  padding: 0;
 }

</style>