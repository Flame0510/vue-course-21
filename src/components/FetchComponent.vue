<script setup lang="ts">
  import SectionComponent from './SectionComponent.vue';

  import useFetch from '../utils/fetch';

  /* //UTILIZZO DI FETCH CLASSICO
  //const data = ref([]);
  
  await fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((json) => (data.value = json))
  .catch((err) => console.error(err)); */

  //UTLIZZO DELLA UTIL "useFetch" CHE ABBIAMO CREATO IN PRECEDENZA
  const { data, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
</script>

<template>
  <SectionComponent title="CHIAMATE API (FETCH)">
    <!-- IL TEMPLATE SI UTILIZZA PER CONTENERE DEGLI ELEMENTI HTML IN MODO DINAMICO E PER POTER UTILIZZARE CONTEMPORANEAMENTE PIU' DIRETTIVE (V-IF, V-FOR, ECC...) -->
    <template v-if="!error">
      <p v-for="({ title }, index) in data" :key="index">{{ title }}</p>
    </template>
  </SectionComponent>
</template>

<style scoped lang="scss"></style>
