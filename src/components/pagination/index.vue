<template>
    <div class="pagination">
        <button :disabled="pageNo === 1" @click="setPageNo(pageNo - 1)">上一页</button>
        <button :class="{ active: pageNo === 1 }" v-if="pageCenterNo.start > 1" @click="setPageNo(1)">1</button>
        <button :class="{ active: pageNo === 2 }" v-if="pageCenterNo.start === 3" @click="setPageNo(2)">2</button>
        <button v-if="pageCenterNo.start > 3">···</button>

        <button :class="{ active: pageNo === page }" v-for="(page, index) in pageCenterNo.arr" :key="index" @click="setPageNo(page)">{{ page }}</button>
        <!-- <button v-for="(page, index) in pageCenterNo.end" :key="index" v-hidepage="('hello', 'word')">{{ page }}</button> -->

        <button v-if="pageCenterNo.end < pageTotal - 2">···</button>
        <button :class="{ active: pageNo === pageTotal - 1 }" v-if="pageCenterNo.end === pageTotal - 2" @click="setPageNo(pageTotal - 1)">{{ pageTotal - 1 }}</button>
        <button :class="{ active: pageNo === pageTotal }" v-if="pageCenterNo.end < pageTotal" @click="setPageNo(pageTotal)">{{ pageTotal }}</button>
        <button :disabled="pageNo === pageTotal" @click="setPageNo(pageNo + 1)">下一页</button>

        <button style="margin-left: 30px">共 {{ total }} 条</button>
    </div>
</template>

<script>
    export default {
        name: 'Pagination',
        props: ['pageNo', 'pageSize', 'total', 'continues'],
        computed: {
            pageTotal() {
                return Math.ceil(this.total / this.pageSize);
            },
            pageCenterNo() {
                let { pageNo, pageTotal, continues } = this;
                let start = 0,
                    end = 0;
                const arr = [];
                if (pageTotal < continues) {
                    start = 1;
                    end = pageTotal;
                } else {
                    start = pageNo - parseInt(continues / 2);
                    end = pageNo + parseInt(continues / 2);
                    if (start < 1) {
                        start = 1;
                        end = continues;
                    }
                    if (end > pageTotal) {
                        end = pageTotal;
                        start = pageTotal - continues + 1;
                    }
                }
                for (let index = start; index <= end; index++) {
                    arr.push(index);
                }
                return { start, end, arr };
            },
        },
        methods: {
            setPageNo(num) {
                console.log(num);
                this.$emit('getPageNo', num);
            },
        },
        directives: {
            hidepage(ele, binding) {
                console.log(ele, binding);
            },
        },
    };
</script>

<style lang="less" scoped>
    .pagination {
        text-align: center;
        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
            }

            &.active {
                cursor: not-allowed;
                background-color: #409eff;
                color: #fff;
            }
        }
    }
</style>
