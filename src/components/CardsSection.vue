<script setup lang="ts">
  import { ref } from 'vue';
  import SectionComponent from './SectionComponent.vue';
  import CardComponent from './CardComponent.vue';

  type Card = {
    img: string;
    title: string;
    description: string;
    cta?: string;
    url?: string;
  };

  const cards = ref<Card[]>([
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
</script>

<template>
  <SectionComponent title="CARDS">
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
  </SectionComponent>
</template>

<style scoped lang="scss">
  @import '../scss/includes.scss';

  .cards-container {
    @include flex(null, null);

    gap: rem(16);
  }
</style>
