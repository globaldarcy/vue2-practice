<template>
    <div>
        <TypeNav></TypeNav>
        <!-- <h1>params: {{ $route.params.keyword }}</h1>
        <h2>query: {{ $route.query.k }}</h2>
        <h3>props: {{ keyword }}</h3> -->
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue';

    export default {
        props: ['keyword', 'query', 'params'],
    };
</script>
