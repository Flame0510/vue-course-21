<script setup lang="ts">
  import { ref } from 'vue';

  import SectionComponent from './SectionComponent.vue';

  const names = ref<string[]>(['Mario', 'Gianfranco', 'Luca']);
</script>

<template>
  <SectionComponent title="FOR">
    <div class="names-container">
      <!-- NAME STAMP CON CLASSE DINAMICA-->
      <p v-for="(name, index) in names" :key="index" :class="{ active: index === 1 }">
        {{ name }}
      </p>
    </div>
  </SectionComponent>
</template>

<style scoped lang="scss">
  .active {
    color: red;
  }
</style>
