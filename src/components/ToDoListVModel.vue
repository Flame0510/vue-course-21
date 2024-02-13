<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  import SectionComponent from './SectionComponent.vue';

  const names = ref<string[]>(['Mario', 'Gianfranco', 'Luca']);

  const inputValue = ref<string>('');

  const handleAddName = () => {
    names.value.push(inputValue.value);

    inputValue.value = '';
  };

  onMounted(() => {
    //QUERY SELECTOR PER PRENDERE IL RIFERIMENTO DEL DOM DELL'INPUT
    const input = document.querySelector('#to-do-list-input');
    console.log(input);
  });
</script>

<template>
  <SectionComponent title="TO DO LIST - V-MODEL">
    <div class="names-container">
      <!-- NAME STAMP -->
      <p v-for="(name, index) in names" :key="index">
        {{ name }}
      </p>

      <!-- AGGIORNAMENTO IN TEMPO REALE CLASSICO -->
      <!-- <input 
        @input="(event) => (inputValue = event.target.value)" 
        :value="inputValue" /> -->

      <!-- AGGIORNAMENTO IN TEMPO REALE CON V-MODEL (CONSIGLIATO) -->
      <input v-model="inputValue" id="to-do-list-input" />

      <button @click="handleAddName">ADD NAME</button>
    </div>
  </SectionComponent>
</template>
