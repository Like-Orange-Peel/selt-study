<script setup lang="ts">
import SlotTest from './slot.vue'
const data = { name: '简忠普' }
</script>

<template>
  <div class="about">
    <SlotTest>
      你好世界

      <template #head>
        {{ data.name }} 我是头部
      </template>

      <template #main="slotProps">
        我是主体
        {{ slotProps }}
      </template>

      <template #floor="slotProps">
        我是尾部
        {{slotProps.floor.test1}}
      </template>

    </SlotTest>
  </div>
</template>

<!--events & lifecycle  -->

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
