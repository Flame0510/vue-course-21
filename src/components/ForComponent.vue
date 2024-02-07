<script setup lang="ts">
  import { ref } from 'vue';

  const names = ref<string[]>(['Mario', 'Gianfranco', 'Luca']);
</script>

<template>
  <section class="section">
    <!-- TITLE -->
    <h1 class="title">FOR</h1>

    <div class="names-container">
      <!-- NAME STAMP -->
      <p v-for="(name, index) in names" :key="index">
        {{ name }}
      </p>
    </div>
  </section>
</template>
