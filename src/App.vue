<script setup lang="ts">
  import RefValue from './components/RefValue.vue';
  import ForComponent from './components/ForComponent.vue';
  import ToDoList from './components/ToDoList.vue';
  import TextComponent from './components/TextComponent.vue';
  import ToDoListVModel from './components/ToDoListVModel.vue';
  import MountedUnMounted from './components/MountedUnMounted.vue';
  import ButtonComponent from './components/ButtonComponent.vue';
  import SectionComponent from './components/SectionComponent.vue';
  import { ref } from 'vue';

  const mountToggle = ref<boolean>(false);

  const clickCounter = ref<number>(0);
</script>

<template>
  <div class="container">
    <!-- REF -->
    <RefValue />

    <!-- FOR -->
    <ForComponent />
    <ToDoList />
    <ToDoListVModel />

    <SectionComponent title="TEXT COMPONENT">
      <!-- TEXT COMPONENT -->
      <TextComponent :class="Math.random() > 0.5 ? 'red' : 'green'" />
      <TextComponent class="green" />
    </SectionComponent>

    <SectionComponent title="MOUNT & UNMOUNT">
      <!-- MOUNT & UNMOUNT -->
      <MountedUnMounted v-if="mountToggle" />
      <button @click="mountToggle = !mountToggle">{{ mountToggle ? 'hide' : 'show' }}</button>
    </SectionComponent>

    <SectionComponent title="BUTTON COMPONENT">
      <!-- BUTTON COMPONENT (DYNAMIC COMPONENT) -->
      <ButtonComponent
        text="+"
        class="primary"
        @click="console.log('click')"
        @buttonClick="clickCounter++"
      />
      <span>{{ clickCounter }}</span>
      <ButtonComponent
        text="-"
        class="secondary"
        @click="console.log('click 2')"
        @buttonClick="clickCounter--"
      />
    </SectionComponent>
  </div>
</template>

<style scoped lang="scss"></style>
