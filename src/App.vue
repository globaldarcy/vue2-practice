<template>
    <div>
        <Header></Header>
        <router-view />
        <Footer v-show="$route.meta.show"></Footer>
    </div>
</template>

<script>
    import Header from './components/header';
    import Footer from './components/footer';
    import { mapActions } from 'vuex';
    export default {
        components: {
            Header,
            Footer,
        },
        methods: {
            ...mapActions('home', ['categoryList']),
        },
        mounted() {
            this.categoryList();
        },
    };
</script>

<style></style>
