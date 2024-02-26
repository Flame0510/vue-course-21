<script setup lang="ts">
  import { reactive } from 'vue';
  import ButtonComponent from './ButtonComponent.vue';
  import type { CardType } from './CardsSection.vue';

  const emit = defineEmits(['addCard']);

  const values = reactive<CardType>({
    img: '',
    title: '',
    description: '',
    cta: '',
    url: ''
  });

  type CardTypeEnum = keyof CardType;

  const handleSubmit = (event: Event) => {
    console.log(values.img);
    //CREIAMO UN ARRAY CONTENENTE TUTTI GLI INPUT DEL FORM
    const elements = Array.from((event.target as HTMLFormElement).childNodes as NodeListOf<HTMLInputElement>);

    //TRAMITE "Object.keys" CICLIAMO LE CHIAVI DELL'OGGETTO "values"
    //CON CUI ANDIAMO A PRENDERE IL VALORE DELL'INPUT CORRISPONDENTE ALLA CHIAVE
    //CHE VIENE SUCCESSIVAMENTE DEFINITO COME VALORE DELLA CHIAVE DI "values" CORRISPONDENTE
    Object.keys(values).forEach(
      (inputName: string) => (values[inputName] = elements.find(({ name }) => inputName === name)?.value || '')
    );

    //EMETTIAMO UN EVENTO "addCard" AL PADRE IN CUI PASSIAMO "values"
    emit('addCard', values);

    /* values.img = '';
    values.title = '';
    values.description = '';
    values.cta = '';
    values.url = ''; */

    //INIZIALIZZA TUTTI I VALORI DI "values" ED E' IL CORRISPETTIVO DEL CODICE PRECEDENTE
    Object.keys(values).forEach((inputName: string) => (values[inputName] = ''));
  };
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form-container">
    <h2>CARD FORM</h2>

    <input type="text" name="img" placeholder="Image url" :value="values.img" required />
    <input type="text" name="title" placeholder="Title" :value="values.title" required />
    <input type="text" name="description" placeholder="Description" :value="values.description" required />
    <input type="text" name="cta" placeholder="CTA" :value="values.cta" />
    <input type="text" name="url" placeholder="Url" :value="values.url" />

    <ButtonComponent type="submit" text="Aggiungi Card" />
  </form>
</template>

<style scoped lang="scss">
  @import '../scss/includes.scss';

  .form-container {
    @include flex($flex-direction: column);

    gap: rem(8);

    width: rem(300);

    margin-bottom: rem(16);
  }
</style>
