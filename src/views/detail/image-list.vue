<template>
    <div class="swiper-container" ref="imgList">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, i) in skuImageList" :key="item.id">
                <img :src="item.imgUrl" :class="{ active: currentIndex == i }" @click="changeIndex(i)" />
            </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import { mapMutations } from "vuex";
    export default {
        name: 'ImageList',
        data() {
            return {
                currentIndex: 0,
            };
        },
        props: ['skuImageList'],
        methods: {
            // ...mapMutations('detail', ['changeImgIndexHandler']),
            changeIndex(i) {
                this.currentIndex = i;
                // this.changeImgIndexHandler(i);
                this.$store.commit('detail/changeImgIndexHandler', i);
                // this.$bus.$emit('getIndex', i);
            }
        },
        watch: {
            skuImageList: {
                handler() {
                    this.$nextTick(function () {
                        new Swiper(this.$refs.imgList, {
                            slidesPerView: 3,
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                        });
                    });
                },
            },
        },
    };
</script>

<style lang="less" scoped>
    .swiper-container {
        height: 56px;
        width: 412px;
        box-sizing: border-box;
        padding: 0 12px;

        .swiper-slide {
            width: 56px;
            height: 56px;

            img {
                width: 100%;
                height: 100%;
                border: 1px solid #ccc;
                padding: 2px;
                width: 50px;
                height: 50px;
                display: block;

                &.active {
                    border: 2px solid #f60;
                    padding: 1px;
                }

                &:hover {
                    border: 2px solid #f60;
                    padding: 1px;
                }
            }
        }

        .swiper-button-next {
            left: auto;
            right: 0;
        }

        .swiper-button-prev {
            left: 0;
            right: auto;
        }

        .swiper-button-next,
        .swiper-button-prev {
            box-sizing: border-box;
            width: 12px;
            height: 56px;
            background: rgb(235, 235, 235);
            border: 1px solid rgb(204, 204, 204);
            top: 0;
            margin-top: 0;
            &::after {
                font-size: 12px;
            }
        }
    }
</style>
