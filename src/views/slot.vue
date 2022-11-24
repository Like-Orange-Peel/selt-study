<script setup lang='ts'>
const message = { mes: '懒狗' }

const test1 = [1, 2, 3, 4]

const test2 = [5, 6, 7, 8]

</script>
<template>
    <div class="box">
        <!-- 具名插槽 使用name来识别 -->
        <slot name="head" />
        <br>
        <!--插槽普通用法 匿名插槽-->
        <slot />
        <br>
        <!-- 作用插槽 向上传递数据 -->
        <slot name="main" :prop="test1" />

        <br>
        <slot name="floor" :floor="{ test1, test2 }" />
    </div>

</template>
<style scoped>

</style>