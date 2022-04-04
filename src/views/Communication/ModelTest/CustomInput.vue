<template>
    <div style="background: #ccc; height: 50px">
        <h1>input包装组件----{{ value }}</h1>
        <input :value="value" @input="$emit('input', $event.target.value)" />
    </div>
</template>

<script>
    export default {
        name: 'CustomInput',
        props: ['value'],
    };
</script>
