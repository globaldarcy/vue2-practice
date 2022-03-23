<template>
    <div class="type-nav">
        <!-- <h3>{{ navList }}</h3> -->
        <div class="container">
            <div @mouseleave="leaveShow" @mouseenter="enterShow">
                <h2 class="all">全部商品分类</h2>
                <transition name="sort">
                    <div class="sort" v-show="show">
                        <div class="all-sort-list2" @click="goSearch">
                            <div class="item" v-for="(c1, index) in navList" :key="c1.categoryId" :class="{ cur: getCurrentIndex === index }">
                                <h3 @mouseenter="changeIndex(index)">
                                    <a :data-category-name="c1.categoryName" :data-category1-id="c1.categoryId">{{ c1.categoryName }}</a>
                                    <!-- <router-link to="/search">{{ c1.categoryName }}</router-link> -->
                                    <!-- <router-link tag="span" to="/search"><a target="_blank">{{ c1.categoryName }}</a></router-link> -->
                                </h3>
                                <!-- 2 - 3 level -->
                                <div class="item-list clearfix" :style="{ display: getCurrentIndex === index ? 'block' : 'none' }">
                                    <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a :data-category-name="c2.categoryName" :data-category2-id="c2.categoryId">{{ c2.categoryName }}</a>
                                                <!-- <router-link to="/search">{{ c2.categoryName }}</router-link> -->
                                            </dt>
                                            <dd>
                                                <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                    <a :data-category-name="c3.categoryName" :data-category3-id="c3.categoryId">{{ c3.categoryName }}</a>
                                                    <!-- <router-link to="/search">{{ c3.categoryName }}</router-link> -->
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState, mapMutations, mapGetters } from 'vuex';
    import { throttle } from 'lodash';
    export default {
        name: 'TypeNav',
        data() {
            return {
                // currentIndex: -1,
                show: true,
            };
        },
        computed: {
            ...mapState({
                navList: (state) => state.home.navList,
            }),
            ...mapGetters(['getCurrentIndex']),
        },
        mounted() {
            // this.$store.dispatch('categoryList');
            if (this.$route.path !== '/') {
                this.show = false;
            }
        },
        methods: {
            ...mapMutations(['cIndex']),
            // changeIndex(i) {
            //     // this.currentIndex = i;
            //     this.cIndex(i);
            //     console.log(i);
            // },
            changeIndex: throttle(function (i) {
                // 节流函数
                this.cIndex(i);
            }, 50),
            goSearch(e) {
                // this.$router.push('search')
                let ele = e.target;
                // console.log(ele);
                // console.log(ele.dataset);
                let { categoryName, category1Id, category2Id, category3Id } = ele.dataset;
                // console.log(category1Id, category2Id, category3Id);
                if (categoryName) {
                    let location = { name: 'search' };
                    let query = { categoryName };
                    switch (true) {
                        case category1Id != undefined:
                            query.category1Id = category1Id;
                            break;

                        case category2Id != undefined:
                            query.category2Id = category2Id;
                            break;

                        default:
                            query.category3Id = category3Id;
                            break;
                    }
                    if (this.$route.params) {
                        location.params = this.$route.params;
                        location.query = query;
                        this.$router.push(location);
                    }
                }
            },
            enterShow() {
                if (this.$route.path !== '/') {
                    this.show = true;
                }
            },
            leaveShow() {
                this.cIndex(-1);
                if (this.$route.path !== '/') {
                    this.show = false;
                }
            },
        },
    };
</script>

<style lang="less" scoped>
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        // &:hover {
                        //     .item-list {
                        //         display: block;
                        //     }
                        // }
                    }
                    .cur {
                        background-color: skyblue;
                    }
                }
            }
            .sort-enter {
                height: 0;
            }
            .sort-enter-to {
                height: 461px;
            }
            .sort-enter-active,
            .sort-leave-active {
                transition: height 0.3s;
            }
        }
    }
</style>
