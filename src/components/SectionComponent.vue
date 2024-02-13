<script setup lang="ts">
  defineProps({
    title: String
  });
</script>

<template>
  <section class="section">
    <!-- TITLE -->
    <h1 class="title" v-if="title">{{ title }}</h1>
    <slot />
  </section>
</template>

<style scoped lang="scss">
  .section {
    padding: 32px 0;

    border-bottom: 1px solid #fff;

    .title {
      color: #fff;
    }
  }
</style>
