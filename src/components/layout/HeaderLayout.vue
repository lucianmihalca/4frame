<template>
  <header class="header">
    <div class="container">
      <!-- Bloque izquierdo: Logo y navegación principal -->
      <div class="left-block">
        <div class="logo">
          <router-link to="/">4FRAME</router-link>
        </div>

        <nav class="nav primary-nav">
          <ul>
            <li><router-link to="/" class="link">HOME</router-link></li>
            <li><router-link to="/for-you" class="link">FOR YOU</router-link></li>
            <li><router-link to="/movies" class="link">MOVIES</router-link></li>
            <li><router-link to="/tv-shows" class="link">TV SHOWS</router-link></li>
          </ul>
        </nav>
      </div>

      <!-- Bloque central: Búsqueda -->
      <div class="search">
        <div class="wrapper">
          <div class="search-icon">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </div>
          <input type="text" v-model="searchQuery" placeholder="Search" @keyup.enter="goToSearch" />
        </div>
      </div>

      <!-- Bloque derecho: Navegación secundaria y login -->
      <div class="right-block">
        <nav class="nav secondary-nav">
          <ul>
            <li><router-link to="/favorites" class="link">FAVORITES</router-link></li>
            <li><router-link to="/my-list" class="link">MY LIST</router-link></li>
          </ul>
        </nav>

        <div class="user-avatar">
          <router-link to="/profile">
            <div class="avatar-circle">
              <img v-if="userAvatar" :src="userAvatar" alt="User avatar" />
              <div v-else class="avatar-placeholder">
                <font-awesome-icon :icon="['far', 'user']" />
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const searchQuery = ref("");
const router = useRouter();
const userAvatar = ref("");

const goToSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: "/search",
      query: { q: searchQuery.value },
    });
  }
};
</script>

<style scoped lang="scss">
@use "../../assets/scss/layout/_header.scss";
</style>
