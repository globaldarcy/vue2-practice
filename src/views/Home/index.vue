<template>
    <div>
        <TypeNav />
        <ListContainer />
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor :list="floor" v-for="floor in floorList" :key="floor.id"></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ListContainer from '@/components/home/list-container.vue';
    import Recommend from '@/components/home/recommend.vue';
    import Rank from '@/components/home/rank.vue';
    import Like from '@/components/home/like.vue';
    import Floor from '@/components/home/floor.vue';
    import Brand from '@/components/home/brand.vue';
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'Home',
        components: {
            ListContainer,
            Recommend,
            Rank,
            Like,
            Floor,
            Brand,
        },
        computed: {
            // ...mapState(['floorList']) // 因为是 Vuex 使用了模块(modules), 所以必须使用对象形式,否则找不到对应的 floorList
            ...mapState({
                floorList: (state) => state.home.floorList,
            }),
        },
        methods: {
            ...mapActions('home', ['getFloorList']),
            ...mapActions('user', ['getUserInfo', 'setUserInfo']),
            async userInfoMethod() {
                await this.getUserInfo()
                    .then((resolve) => {
                        console.log('userInfoMethod', resolve);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
            async getBannerListMethod() {
                let result = await this.getFloorList()
                    .then((resolve) => {
                        console.log('getBannerListMethod', resolve);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
        },
        mounted() {
            this.getBannerListMethod();
            this.userInfoMethod();
        },
    };
</script>
