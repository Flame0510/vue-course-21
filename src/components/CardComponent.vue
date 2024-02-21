<script setup lang="ts">
  defineProps({
    img: String,
    title: String,
    description: String,
    cta: String,
    url: String
  });
</script>

<template>
  <div class="card-component">
    <img :src="img" :alt="title" class="card-img" />
    <h2>{{ title }}</h2>
    <p class="card-description">{{ description }}</p>
    <a :href="url || 'https://youtu.be/dQw4w9WgXcQ'" target="_blank" class="card-cta">
      {{ cta || 'SCARICA GTA VI GRATIS!!!' }}
    </a>
  </div>
</template>

<style scoped lang="scss">
  @import '../scss/includes.scss';
  .card-component {
    @include flex(space-between, $flex-direction: column);

    width: 25%;

    margin-bottom: rem(16);

    color: #000;
    background: #ddd;

    padding: rem(8);

    border-radius: rem(8);

    .card-img {
      width: 100%;
      height: 60%;

      border-radius: 8px;

      object-fit: cover;
    }

    .card-description {
      margin-bottom: rem(16);
    }

    .card-cta {
      text-decoration: none;

      color: #fff;
      background: #000;

      padding: rem(4) rem(8);

      border-radius: rem(4);

      transition: $transition;

      &:hover {
        background: lighten(#000, 50%);
      }
    }
  }
</style>
