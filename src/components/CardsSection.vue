<script setup lang="ts">
  import { ref } from 'vue';
  import SectionComponent from './SectionComponent.vue';
  import CardComponent from './CardComponent.vue';
  import CardForm from './CardForm.vue';
  import CardFormVModel from './CardFormVModel.vue';

  export type CardType = {
    img: string;
    title: string;
    description: string;
    cta?: string;
    url?: string;
  };

  const cards = ref<CardType[]>([
    {
      img: 'https://images.ctfassets.net/wn7ipiv9ue5v/573sV0kiTALMbBfR1vDfTm/fcd4104d2500ccf296c2c7ad1782ebce/GTAIV_Hero_Character_1920x1080.jpg?w=&h=630&fm=&q=',
      title: 'GTA IV',
      description: 'GTA IV besta game eveerrererjererererere!!!!!'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png',
      title: 'GTA V',
      description: 'GTA V besta game eveerrererjererererere!!!!!'
    },
    {
      img: 'https://images.everyeye.it/img-cover/gta-6-v19-31349.jpg',
      title: 'GTA VI',
      description: 'GTA VI besta game eveerrererjererererere!!!!!'
    }
  ]);

  const handleAddCard = (card: CardType) => {
    cards.value.push(card);
  };
</script>

<template>
  <SectionComponent title="CARDS">
    <CardForm @add-card="handleAddCard" />
    <CardFormVModel @add-card="handleAddCard" />

    <div class="cards-container">
      <CardComponent
        v-for="({ img, title, description, cta, url }, index) in cards"
        :key="index"
        :img="img"
        :title="title"
        :description="description"
        :cta="cta"
        :url="url"
      />
    </div>

    <!-- UTILIZZO DI "attr()" -->
    <!-- <p data-name=" Giorgio" class="name">CIAO</p> -->
  </SectionComponent>
</template>

<style scoped lang="scss">
  @import '@/scss/includes.scss';

  .cards-container {
    @include flex($flex-wrap: wrap);

    gap: rem(16);
  }

  //UTILIZZO DI "attr()"
  /* .name {
    &:after {
      content: attr(data-name);
    }
  } */
</style>
