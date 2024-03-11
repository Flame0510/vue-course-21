<script setup lang="ts">
  import { loader } from '../../store';

  setTimeout(() => loader.setLoading(false), 1000);
</script>

<template>
  <div class="loader-container" :class="{ show: loader.loading }">
    <p class="loader-message">Loading...</p>
  </div>
</template>

<style scoped lang="scss">
  @import '../scss/includes.scss';

  .loader-container {
    @include flex(center, center);

    width: 100%;
    height: 100%;

    color: #fff;
    background: rgba(#000, 0.8);

    position: fixed;
    top: 0;
    left: 0;

    transition: $transition;

    opacity: 0;

    &.show {
      opacity: 1;
    }

    .loader-message {
      font-size: rem(48);
    }
  }
</style>
