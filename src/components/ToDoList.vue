<script setup lang="ts">
  import { ref } from 'vue';

  const names = ref<string[]>(['Mario', 'Gianfranco', 'Luca']);

  const addName = (event: Event) => {
    //DESTRUTTURIAMO 'event' PRENDENDO 'target'
    const { target } = event;

    //CREIAMO UN RIFERIMENTO DI 'target' CHIAMATO 't' FACENDO IL CASTING A 'HTMLInputElement'
    const t = target as HTMLInputElement;

    //DESTRUTTURIAMO 't' PRENDENDO 'value'
    const { value } = t;

    //FACCIAMO UN PUSH DEL VALORE DELL'INPUT ('value') ALL'INTERNO DELL'ARRAY 'list'
    names.value.push(value);

    //INIZIALIZZIAMO IL VALORE DELL'INPUT
    t.value = '';
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
  </section>
</template>
