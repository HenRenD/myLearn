<template>
    <div id="app">
        <Layout></Layout>
    </div>
</template>

<script>
import Layout from "./layout/index.vue";
export default {
    name: "App",
    components: {
        Layout,
    },
};
</script>

<style>
#app {
    width: 100%;
    height: 100%;
}
</style>
