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

</style>