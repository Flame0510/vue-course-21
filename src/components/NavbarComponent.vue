<script setup lang="ts">
  import { RouterLink } from 'vue-router';

  import { routes } from '@/router/index';
</script>

<template>
  <nav class="navbar-container">
    <RouterLink
      :to="path"
      v-for="({ path, name }, index) in routes"
      :key="index"
      class="navbar-link"
    >
      <!-- CAPITALIZE IN JAVASCRIPT -->
      <!-- {{ name[0].toUpperCase() + name.substring(1, name.length) }} -->
      {{ name }}
    </RouterLink>
  </nav>
</template>

<style scoped lang="scss">
  @import '@/scss/includes.scss';

  .navbar-container {
    @include flex(space-around, $flex-wrap: wrap);

    gap: rem(16);

    background: rgba(#333, 0.5);
    backdrop-filter: blur(rem(2));

    box-shadow: 0 0 30px rgba(111, 0, 255, 0.2);

    padding: rem(8);

    border: rem(1) solid rgba(#fff, 0.2);
    border-radius: rem(8);

    position: sticky;
    top: rem(16);
    left: 0;

    .navbar-link {
      color: #fff;

      text-decoration: none;
      text-transform: capitalize;

      transition: $transition;

      &:hover {
        color: red;
      }
    }
  }
</style>
