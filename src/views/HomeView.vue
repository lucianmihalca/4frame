<template>
  <UpcomingMediaCarousel v-if="movies.length" :items="movies" titleKey="title" />

  <div class="home-view">
    <section class="section-title">
      <h2>Películas Populares</h2>
    </section>

    <section v-if="loading" class="loading">
      <p>Cargando películas...</p>
    </section>

    <section v-else-if="error" class="error">
      <p>{{ error }}</p>
    </section>

    <section v-else class="movies-grid">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { tmdbService } from "../services/tmdb.service";
import type { IMedia } from "../interfaces/media-union.interface";
import MovieCard from "../components/MovieCard.vue";
import UpcomingMediaCarousel from "../components/views/UpcomingMediaCarousel.vue";

const movies = ref<IMedia[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await tmdbService.getMoviesPopular();
    movies.value = response.results;
  } catch (err) {
    console.error("Error cargando películas:", err);
    error.value = "Error al cargar las películas. Por favor, intenta de nuevo.";
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped lang="scss">
@use "../assets/scss/views/home";
</style>
