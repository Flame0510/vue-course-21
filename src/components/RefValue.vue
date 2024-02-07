<script setup lang="ts">
  import { ref } from 'vue';

  const name = ref<string>('Gianfranco');
</script>

<template>
  <section class="section">
    <!-- TITLE -->
    <h1 class="title">REF</h1>

    <div>
      <!-- NAME STAMP -->
      <p>{{ name }}</p>

      <!-- NAME CHANGE -->
      <button @click="name = 'Mario'">Cambia nome</button>

      <!-- IF -->
      <p v-if="name === 'Mario'">MARIO</p>
    </div>
  </section>
</template>
