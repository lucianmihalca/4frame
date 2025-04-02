<template>
  <div class="tv-show-detail-view">
    <!--  Imagen de fondo -->
    <MediaHero :media="movie" />

    <!-- Estructura principal en 3 columnas -->
    <main class="tv-show-detail-layout container">
      <!-- Columna póster + comentarios -->
      <div class="left-column">
        <MediaPoster :media="movie" />
      </div>

      <!-- Columna información principal -->
      <div class="center-column">
        <div class="info-top">
          <MediaHeaderInfo :media="movie" />
        </div>

        <div class="details-grid">
          <MediaOverviewInfo :media="movie" />
        </div>
      </div>

      <!-- Columna detalles extra -->
      <aside class="right-column">
        <div class="synopsis">
          <MediaExtraInfo :media="movie" />
        </div>
      </aside>
    </main>

    <!-- Recomendaciones y similares -->
    <div class="bottom-recommendations container">
      <MediaRecommendations
        v-if="recommendations.results.length"
        :shows="recommendations.results"
      />

      <MediaSimilar :shows="similar.results" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

import type { IMovieDetails } from "@/interfaces/movie.interface";
import type { IBaseApiResponse } from "@/interfaces/api-response.interface";
import type { ICredits } from "@/interfaces/media-extra.interface";
import type { IMovie } from "@/interfaces/movie.interface";

import { tmdbService } from "@/services/tmdb.service";

import MediaHero from "../components/views/MediaHero.vue";
import MediaPoster from "../components/views/MediaPoster.vue";
import MediaHeaderInfo from "../components/views/MediaHeaderInfo.vue";
import MediaOverviewInfo from "../components/views/MediaOverviewInfo.vue";
import MediaExtraInfo from "../components/views/MediaExtraInfo.vue";
import MediaRecommendations from "../components/views/MediaRecommendations.vue";
import MediaSimilar from "../components/views/MediaSimilar.vue";

const route = useRoute();
const movieId = Number(route.params.id);

const movie = ref<IMovieDetails>({} as IMovieDetails);
const credits = ref<ICredits>({ cast: [], crew: [], id: 0 });
const recommendations = ref<IBaseApiResponse<IMovie>>({
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
});
const similar = ref<IBaseApiResponse<IMovie>>({
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
});

const fetchMovieData = async (id: number) => {
  movie.value = await tmdbService.getMovieDetails(id);
  credits.value = await tmdbService.getMovieCredits(id);
  recommendations.value = await tmdbService.getMovieRecommendations(id);
  similar.value = await tmdbService.getMovieSimilar(id);
};

onMounted(() => {
  fetchMovieData(movieId).then(() => {});
});

watch(
  () => route.params.id,
  async (newId) => {
    if (newId) {
      await fetchMovieData(Number(newId));
    }
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
@use "../assets/scss/views/media-detail";
</style>
