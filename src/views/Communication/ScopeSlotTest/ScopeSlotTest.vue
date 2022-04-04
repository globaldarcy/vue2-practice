<template>
    <div class="slot-test">
        <h2>效果一: 显示TODO列表时, 已完成的TODO为绿色</h2>
        <List :todos="todos">
            <!-- 书写template -->
            <template v-slot="todo">
                <b style="font-weight: bold" :style="{ color: todo.todo.isComplete ? 'green' : 'black' }">{{ todo.todo.text }}</b>
                <!-- {{todo}} -->
            </template>
        </List>
        <br />
        <List :todos="todos">
            <!-- 书写template -->
            <template v-slot="todo">
                <a :style="{ color: todo.todo.isComplete ? 'green' : 'black' }">{{ todo.todo.text }}</a>
            </template>
        </List>
        <hr />
        <h2>效果二: 显示TODO列表时, 带序号, TODO的颜色为蓝绿搭配</h2>
        <List1 :data="todos">
            <template v-slot="{ row, index }">
                <h1 :style="{ color: row.isComplete ? 'green' : 'hotpink' }">索引值{{ index }} --------- {{ row.text }}</h1>
            </template>
        </List1>
    </div>
</template>

<script>
    import List from './List';
    import List1 from './List1';
    export default {
        name: 'ScopeSlotTest',
        data() {
            return {
                todos: [
                    { id: 1, text: '日照香炉生紫烟，', isComplete: false },
                    { id: 2, text: '遥看瀑布挂前川。', isComplete: true },
                    { id: 3, text: '飞流直下三千尺，', isComplete: false },
                    { id: 4, text: '疑是银河落九天。', isComplete: false },
                ],
            };
        },
        components: {
            List,
            List1,
        },
    };
</script>

<style>
    .slot-test {
        line-height: 1.6;
    }
</style>
