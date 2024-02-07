<script setup lang="ts">
  import { ref } from 'vue';

  const names = ref<string[]>(['Mario', 'Gianfranco', 'Luca']);

  const addName = (event) => {
    names.value.push(event.target.value);

    event.target.value = '';
  };
</script>

<template>
  <section class="section">
    <!-- TITLE -->
    <h1 class="title">TO DO LIST</h1>

    <div class="names-container">
      <!-- NAME STAMP -->
      <p v-for="(name, index) in names" :key="index">
        {{ name }}
      </p>

      <!-- INPUT -->
      <input @change="addName" />
    </div>
    3
  </section>
</template>
