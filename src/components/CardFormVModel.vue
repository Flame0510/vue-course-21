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

  //UTILIZZO DI keyof
  type CardTypeKeys = keyof CardType;
  //CREA UN TYPO CHE CONTIENE TUTTE LE CHIAVI DELL'OGGETTO
  //type CardTypeKeys = 'img' | 'title' | 'description' | 'cta' | 'url';

  const handleSubmit = () => {
    emit('addCard', values);

    Object.keys(values).forEach((inputName: string) => (values[inputName as CardTypeKeys] = ''));
  };
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form-container">
    <h2>CARD FORM WITH V-MODEL</h2>

    <input type="text" v-model="values.img" placeholder="Image url" required />
    <input type="text" v-model="values.title" placeholder="Title" required />
    <input type="text" v-model="values.description" placeholder="Description" required />
    <input type="text" v-model="values.cta" placeholder="CTA" />
    <input type="text" v-model="values.url" placeholder="Url" />

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
