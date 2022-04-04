<template>
    <div>
        <br>
        小明的爸爸现在有{{ money }}元

        <br>
        <br>
        <h2>不使用sync修改符</h2>
        <Child :money="money" @update:money="money = $event"></Child>

        <br>
        <h2>使用sync修改符</h2>
        <!--  -->
        <Child2 :money.sync="money"></Child2>
    </div>
</template>

<script>
    import Child from './Child.vue';
    import Child2 from './Child2.vue';
    export default {
        name: 'SyncTest',
        data() {
            return {
                money: 10000,
            };
        },
        components: {
            Child,
            Child2,
        },
    };
</script>
