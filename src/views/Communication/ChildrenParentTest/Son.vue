<template>
    <div style="background: #cc9; height: 70px">
        <h3>儿子小明: 有存款: {{ money }}</h3>
        <br />
        <button @click="geiQian(50)">给BABA钱: 50</button>
    </div>
</template>

<script>
    import myMinxin from './mixin';
    export default {
        name: 'Son',
        data() {
            return {
                money: 30000,
            };
        },
        methods: {
            tinghua() {
                console.log('我是小明，我听爸爸的话');
            },
        },
        mixins: [myMinxin],
    };
</script>
