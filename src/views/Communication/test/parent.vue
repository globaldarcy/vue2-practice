<template>
    <div>
        <h1 style="padding-bottom: 30px">这是一个测试模块</h1>
        <Children></Children>
    </div>
</template>

<script>
    import Children from './children.vue';
    export default {
        name: 'Parent',
        components: {
            Children,
        },
    };
</script>
