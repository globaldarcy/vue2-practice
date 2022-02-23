<template>
    <div>
        <Header></Header>
        <router-view/>
        <Footer v-show="$route.meta.show"></Footer>
    </div>
</template>

<script>
import Header from './components/header';
import Footer from './components/footer';
export default {
    components: {
        Header,
        Footer,
    },
};
</script>

<style></style>
