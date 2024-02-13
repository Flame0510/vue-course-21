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
  .button {
    border: none;

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
