<template>
  <div class="tv-show-detail-view">
    <!--  Imagen de fondo -->
    <MediaHero :media="tvShow" />

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
        <MediaPoster :media="tvShow" />
      </div>

      <!-- Columna información principal -->
      <div class="center-column">
        <div class="info-top">
          <MediaHeaderInfo :media="tvShow" />
        </div>

        <div class="details-grid">
          <MediaOverviewInfo :media="tvShow" />
        </div>
      </div>

      <!-- Columna detalles extra -->
      <aside class="right-column">
        <div class="synopsis">
          <MediaExtraInfo :media="tvShow" />
        </div>
      </aside>
    </main>

    <!-- Recomendaciones y similares -->
    <div class="bottom-recommendations container">
      <MediaRecommendations :shows="recommendations.results" />
      <MediaSimilar :shows="similar.results" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

import type { ITvShowDetails } from "@/interfaces/tv-show.interface";
import type { ICredits, IVideosResponse } from "@/interfaces/media-extra.interface";
import type { IBaseApiResponse } from "@/interfaces/api-response.interface";
import type { ITvShow } from "@/interfaces/tv-show.interface";

import { tmdbService } from "@/services/tmdb.service";

import MediaHero from "../components/views/MediaHero.vue";
import TvShowSeasons from "../components/views/TvShowSeasons.vue";
import TvShowEpisodes from "../components/views/TvShowEpisodes.vue";
import MediaPoster from "../components/views/MediaPoster.vue";
import MediaHeaderInfo from "../components/views/MediaHeaderInfo.vue";
import MediaOverviewInfo from "../components/views/MediaOverviewInfo.vue";
import MediaExtraInfo from "../components/views/MediaExtraInfo.vue";
import MediaRecommendations from "../components/views/MediaRecommendations.vue";
import MediaSimilar from "../components/views/MediaSimilar.vue";

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

const fetchTvShowData = async (id: number) => {
  tvShow.value = await tmdbService.getTvSeriesDetails(id);

  if (Array.isArray(tvShow.value.seasons) && tvShow.value.seasons.length > 0) {
    selectedSeason.value = tvShow.value.seasons[0].season_number;
  }

  credits.value = await tmdbService.getTvSeriesCredits(id);
  videos.value = await tmdbService.getTvSeriesVideos(id);
  recommendations.value = await tmdbService.getTvSeriesRecommendations(id);
  similar.value = await tmdbService.getTvSeriesSimilar(id);
};

onMounted(() => {
  fetchTvShowData(tvShowId);
});

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      fetchTvShowData(Number(newId));
    }
  }
);
</script>

<style scoped lang="scss">
@use "../assets/scss/views/media-detail";
</style>
