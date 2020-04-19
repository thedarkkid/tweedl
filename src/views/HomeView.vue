<template>
    <section>
        <v-container fluid>
            <v-row>
                <v-col>
                    <h1 class="heading">Profile</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <ProfileCard/>
                </v-col>
                <v-col cols="3">
                    <StatCard />
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
// @ is an alias to /src
import ProfileCard from "../components/widgets/homeview/ProfileCard";
import StatCard from "../components/widgets/homeview/StatCard";
export default {
  name: 'HomeView',
  components: {
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