<template>
  <div id="app">
    <header-layout></header-layout>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import HeaderLayout from "./components/layout/HeaderLayout.vue";
</script>

<style lang="scss" scoped></style>
