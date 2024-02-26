<script setup lang="ts">
  //DEFINIAMO LE PROPS DEL COMPONENTE
  const props = defineProps({
    text: String
  });

  const emit = defineEmits(['buttonClick']);
</script>

<template>
  <button class="button" @click="$emit('buttonClick')">{{ text }}</button>
</template>

<style scoped lang="scss">
  @import '../scss/includes.scss';

  .button {
    border: none;

    padding: rem(8);

    &.primary {
      color: #fff;
      background: #333;
    }

    &.secondary {
      color: #333;
      background: #fff;
    }
  }
</style>
