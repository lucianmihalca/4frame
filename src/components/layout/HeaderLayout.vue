<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/">4Frame</router-link>
      </div>

      <!-- Navegación -->
      <nav class="nav">
        <ul>
          <li><router-link to="/" class="link">Inicio</router-link></li>
          <li><router-link to="/populares" class="link">Populares</router-link></li>
          <li><router-link to="/populares" class="link">TV Shows </router-link></li>
          <li><router-link to="/populares" class="link">Populares</router-link></li>
        </ul>
      </nav>

      <!-- Búsqueda -->
      <div class="search">
        <div class="wrapper">
          <div class="search-icon">
            <div class="search-icon">
              <Search :size="20" />
            </div>
          </div>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Buscar series..."
            @keyup.enter="goToSearch"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Search } from "lucide-vue-next";

const searchQuery = ref("");
const router = useRouter();

const goToSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: "/search",
      query: { q: searchQuery.value },
    });
  }
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/layout/header-layout.scss";
</style>
