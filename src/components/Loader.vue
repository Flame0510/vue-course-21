<script setup lang="ts">
  import { watch } from 'vue';
  import { loader } from '../../store';

  import router from '@/router';

  watch(
    router.currentRoute,
    () => {
      loader.setLoading(true);

      setTimeout(() => loader.setLoading(false), 1000);
    },
    { immediate: true }
  );
</script>

<template>
  <div class="loader-container" :class="{ hide: !loader.loading }">
    <p class="loader-message">Loading...</p>
  </div>
</template>

<style scoped lang="scss">
  @import '@/scss/includes.scss';

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

    opacity: 1;
    visibility: visible;

    &.hide {
      opacity: 0;
      visibility: hidden;
    }

    .loader-message {
      font-size: rem(48);
    }
  }
</style>
