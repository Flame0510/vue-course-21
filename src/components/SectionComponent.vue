<script setup lang="ts">
  defineProps({
    title: String
  });
</script>

<template>
  <section class="section-component">
    <!-- TITLE -->
    <h1 class="title" v-if="title">{{ title }}</h1>

    <!-- ELEMENTO "JOLLY" DI HTML CHE VIENE SOSTITUITO CON IL CONTENUTO DEL COMPONENTE -->
    <slot />
  </section>
</template>

<style scoped lang="scss">
  @import '../scss/includes.scss';

  .section-component {
    padding: 32px 0;

    border-bottom: 1px solid #fff;

    .title {
      color: #fff;

      margin-bottom: rem(16);
    }
  }
</style>
