<script setup lang="ts">
  import RefValue from './components/RefValue.vue';
  import ForComponent from './components/ForComponent.vue';
  import ToDoList from './components/ToDoList.vue';
  import TextComponent from './components/TextComponent.vue';
</script>

<template>
  <div class="container">
    <RefValue />

    <ForComponent />
    <ToDoList />

    <TextComponent class="red" />
    <TextComponent class="green" />
  </div>
</template>

<style scoped lang="scss">
  .container:deep(.section) {
    padding: 32px 0;

    border-bottom: 1px solid #fff;

    .title {
      color: #fff;
    }
  }
</style>
