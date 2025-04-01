<template>
  <div class="tv-show-detail-view">
    <!--  Imagen de fondo -->
    <TvShowHero :tvShow="tvShow" />

    <!-- Selector de temporadas y listado de episodios -->
    <div class="tv-show-season-selector container">
      <TvShowSeasons
        v-if="tvShow.seasons?.length"
        :seasons="tvShow.seasons"
        :initialSeason="tvShow.seasons[0].season_number"
        @seasonSelected="handleSeasonSelected"
      />
      <TvShowEpisodes v-if="selectedSeason" :tvShowId="tvShowId" :seasonNumber="selectedSeason" />
    </div>

    <!-- Estructura principal en 3 columnas -->
    <main class="tv-show-detail-layout container">
      <!-- Columna póster + comentarios -->
      <div class="left-column">
        <TvShowPoster :tvShow="tvShow" />
      </div>

      <!-- Columna información principal -->
      <div class="center-column">
        <div class="info-top">
          <TvShowHeaderInfo :tvShow="tvShow" />
        </div>

        <div class="details-grid">
          <TvShowOverviewInfo :tvShow="tvShow" />
        </div>
      </div>

      <!-- Columna detalles extra -->
      <aside class="right-column">
        <div class="synopsis">
          <TvShowExtraInfo :tvShow="tvShow" />
        </div>
      </aside>
    </main>

    <!-- Recomendaciones y similares -->
    <div class="bottom-recommendations container">
      <TvShowRecommendations :shows="recommendations.results" />
      <TvShowSimilar :shows="similar.results" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import type { ITvShowDetails } from "@/interfaces/tv-show.interface";
import type { ICredits, IVideosResponse } from "@/interfaces/media-extra.interface";
import type { IBaseApiResponse } from "@/interfaces/api-response.interface";
import type { ITvShow } from "@/interfaces/tv-show.interface";

import { tmdbService } from "@/services/tmdb.service";

import TvShowHero from "@/components/views/TvShowHero.vue";
import TvShowSeasons from "@/components/views/TvShowSeasons.vue";
import TvShowEpisodes from "@/components/views/TvShowEpisodes.vue";
import TvShowPoster from "@/components/views/TvShowPoster.vue";
import TvShowHeaderInfo from "@/components/views/TvShowHeaderInfo.vue";
import TvShowOverviewInfo from "@/components/views/TvShowOverviewInfo.vue";
import TvShowExtraInfo from "@/components/views/TvShowExtraInfo.vue";
import TvShowRecommendations from "@/components/views/TvShowRecommendations.vue";
import TvShowSimilar from "@/components/views/TvShowSimilar.vue";

const route = useRoute();
const tvShowId = Number(route.params.id);

const tvShow = ref<ITvShowDetails>({} as ITvShowDetails);
const credits = ref<ICredits>({ cast: [], crew: [], id: 0 });
const videos = ref<IVideosResponse>({ id: 0, results: [] });
const recommendations = ref<IBaseApiResponse<ITvShow>>({
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
});
const similar = ref<IBaseApiResponse<ITvShow>>({
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
});
const selectedSeason = ref<number | undefined>(undefined);

const handleSeasonSelected = (seasonNumber: number) => {
  selectedSeason.value = seasonNumber;
};

// Lifecycle
onMounted(async () => {
  tvShow.value = await tmdbService.getTvSeriesDetails(tvShowId);

  if (Array.isArray(tvShow.value.seasons) && tvShow.value.seasons.length > 0) {
    selectedSeason.value = tvShow.value.seasons[0].season_number;
  }

  credits.value = await tmdbService.getTvSeriesCredits(tvShowId);
  videos.value = await tmdbService.getTvSeriesVideos(tvShowId);
  recommendations.value = await tmdbService.getTvSeriesRecommendations(tvShowId);
  similar.value = await tmdbService.getTvSeriesSimilar(tvShowId);
});
</script>

<style scoped lang="scss">
@use "../assets/scss/views/media-detail";
</style>
