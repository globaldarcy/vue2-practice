<template>
    <div style="background: #c9c; height: 70px">
        <h3>女儿小红: 有存款: {{ money }}</h3>
        <br />
        <button @click="geiQian(100)">给BABA钱: 100</button>
    </div>
</template>

<script>
    import myMinxin from './mixin';
    export default {
        name: 'Daughter',
        data() {
            return {
                money: 20000,
            };
        },
        mixins: [myMinxin],
    };
</script>
