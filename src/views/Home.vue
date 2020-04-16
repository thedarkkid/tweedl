<template>
  <v-app>
    <Header/>
    <Sidebar/>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";

export default {
  name: 'Home',
  components: {
    Sidebar,
    Header,
  }
}
</script>
