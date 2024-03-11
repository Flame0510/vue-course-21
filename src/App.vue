<script setup lang="ts">
  import Loader from './components/Loader.vue';
  import NavbarComponent from './components/NavbarComponent.vue';
</script>

<template>
  <Loader />
  <NavbarComponent />
  <RouterView />
</template>

<style scoped lang="scss"></style>
