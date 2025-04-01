<template>
  <div class="tv-shows-view">
    <section class="section-title">
      <h2>Series Populares</h2>
    </section>

    <section v-if="loading" class="loading">
      <p>Cargando series...</p>
    </section>

    <section v-else-if="error" class="error">
      <p>{{ error }}</p>
    </section>

    <section v-else class="shows-grid">
      <MovieCard v-for="show in shows" :key="show.id" :movie="show" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { tmdbService } from "@/services/tmdb.service";
import MovieCard from "@/components/MovieCard.vue";
import type { IMedia } from "@/interfaces/media-union.interface";

const shows = ref<IMedia[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await tmdbService.getTvSeriesPopular();
    shows.value = response.results;
  } catch (err) {
    console.error("Error cargando series:", err);
    error.value = "Error al cargar las series. Por favor, intenta de nuevo.";
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped lang="scss">
@use "../assets/scss/views/tv-shows";
</style>
