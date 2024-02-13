<script setup lang="ts">
  import { ref } from 'vue';

  import SectionComponent from './SectionComponent.vue';

  const name = ref<string>('Gianfranco');
</script>

<template>
  <SectionComponent title="REF">
    <div>
      <!-- NAME STAMP -->
      <p>{{ name }}</p>

      <!-- NAME CHANGE -->
      <button @click="name = 'Mario'">Cambia nome</button>

      <!-- IF -->
      <p v-if="name === 'Mario'">MARIO</p>
      <p v-else-if="name === 'Mirko'">MIRKO</p>
      <p v-else>Nome: {{ name }}</p>
    </div>
  </SectionComponent>
</template>
