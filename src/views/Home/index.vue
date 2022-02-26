<template>
    <div>
        <TypeNav />
        <ListContainer />
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor></Floor>
        <Floor></Floor>
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

export default {
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand,
    },
};
</script>
