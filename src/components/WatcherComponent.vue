<script setup lang="ts">
  import { reactive, ref, watch } from 'vue';

  import SectionComponent from './SectionComponent.vue';

  const text = ref<string>('');
  const text2 = ref<string>('');

  const obj = reactive({
    text: '',
    text2: ''
  });

  //WATCH DELLA SINGOLA CHIAVE DEL REACTIVE CON IL GETTER (CONSIGLIATO)
  watch(
    () => obj.text, //TEXT
    (text) => console.log('obj.text:', text)
  );
  watch(
    () => obj.text2, //TEXT2
    (text) => console.log('obj.text2:', text)
  );

  //WATCH DEL REACTIVE (DA USARE CON PRUDENZA)
  //watch(obj, (obj) => console.log(obj.text, obj.text2));

  //WATCH DI UN SINGOLO REF
  watch(text, (text) => console.log('text:', text), {
    //immediate: true, //VIENE ESEGUITO ALL'ONMOUNTED
    //once: true, //VIENE ESEGUITO SOLO UNA VOLTA
    //deep: true, //FORZA IN UN WATCHER AVANZATO (USARE CON CAUTELA)
    //flush: 'post' //LA CALLBACK VIENE ESEGUITA DOPO L'AGGIORNAMENTO DEL DOM, MA NORMALMENTE VIENE ESEGUITA PRIMA
  });
  watch(text2, (text) => console.log('text2:', text));

  //WATCH CON VALORE PRECEDENTE
  /* watch(
    text,
    (
      text, // VALORE CORRENTE
      oldText //VALORE PRECEDENTE
    ) => console.log('text: ' + text + '\noldText: ' + oldText)
  ); */

  //WATCH DI PIU' REF CONTEMPORANEAMENTE
  //watch([text, text2], (text) => console.log(text[0], text[1]));
</script>

<template>
  <SectionComponent title="WATCHER">
    <h2>WATCH DEL "REF"</h2>
    <input v-model="text" placeholder="text" />
    <input v-model="text2" placeholder="text2" />

    <h2>WATCH DEL "REACTIVE"</h2>
    <input v-model="obj.text" placeholder="text" />
    <input v-model="obj.text2" placeholder="text2" />
  </SectionComponent>
</template>

<style scoped lang="scss"></style>
