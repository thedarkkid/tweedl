<template>
    <HeaderPlusSidebar>
        <HomeView/>
    </HeaderPlusSidebar>
</template>

<script>

    import HeaderPlusSidebar from "../components/layouts/HeaderPlusSidebar";
    import HomeView from "../views/HomeView";
    export default {
        name: "Home",
        components: {HomeView, HeaderPlusSidebar}
    }
</script>

<style lang="scss">
    @import "src/assets/styles/scss/_variables.scss";

    .sidebar_item{
        font-size: small;
        margin: 0;
        color: $primary !important;
        text-decoration: none;
        &:hover{
        }
    }
</style>