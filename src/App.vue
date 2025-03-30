<template>
  <div id="app">
    <header-layout />

    <main>
      <RouterView />
    </main>
    <test />
    <footer-layout />
  </div>
</template>

<script setup lang="ts">
import HeaderLayout from "./components/layout/HeaderLayout.vue";
import FooterLayout from "./components/layout/FooterLayout.vue";
// import Test from "./components/layout/TestLayout.vue";
</script>

<style lang="scss" scoped></style>
