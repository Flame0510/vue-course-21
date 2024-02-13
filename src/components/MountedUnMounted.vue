<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue';

  let interval: any;

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => console.log({ clientX, clientY });

  onMounted(() => {
    console.log('onMounted');

    //ASSEGNAMO L'INTERVAL
    interval = setInterval(() => console.log('Intervallo'), 1000);

    //DEFINIAMO L'EVENT LISTENER
    window.addEventListener('mousemove', handleMouseMove);
  });

  onUnmounted(() => {
    console.log('onUnmounted');

    //PULIAMO L'INTERVAL
    clearInterval(interval);

    //RIMUOVIAMO L'EVENT LISTENER
    window.removeEventListener('mousemove', handleMouseMove);
  });
</script>

<template>
  <p>CIAO!</p>
</template>
