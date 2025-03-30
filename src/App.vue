<template>
  <div id="app">
    <header-layout />

    <main>
      <RouterView />
    </main>

    <footer-layout />
  </div>
</template>

<script setup lang="ts">
import HeaderLayout from "./components/layout/HeaderLayout.vue";
import FooterLayout from "./components/layout/FooterLayout.vue";
</script>

<style lang="scss" scoped></style>
