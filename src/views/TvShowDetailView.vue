<template>
  <div class="tv-show-detail-view">
    <TvShowHero :tvShow="tvShow" />

    <!-- CONTENEDOR DE TEMPORADAS + EPISODIOS -->
    <div class="tv-show-season-selector container">
      <TvShowSeasons
        v-if="tvShow.seasons?.length"
        :seasons="tvShow.seasons"
        :initialSeason="tvShow.seasons[0].season_number"
        @seasonSelected="handleSeasonSelected"
      />
      <TvShowEpisodes v-if="selectedSeason" :tvShowId="tvShowId" :seasonNumber="selectedSeason" />
    </div>

    <main class="tv-show-detail-layout container">
      <!-- Columna izquierda -->
      <div class="left-column">
        <TvShowPoster :tvShow="tvShow" />
        <TvShowComments :tvShowId="tvShow.id" />
      </div>

      <!-- Columna central -->
      <div class="center-column">
        <div class="info-top">
          <TvShowHeaderInfo :tvShow="tvShow" />
        </div>

        <div class="details-grid">
          <TvShowOverviewInfo :tvShow="tvShow" />
        </div>
      </div>

      <!-- Columna derecha -->
      <aside class="right-column">
        <div class="synopsis">
          <TvShowExtraInfo :tvShow="tvShow" />
        </div>
      </aside>
    </main>

    <div class="bottom-recommendations container">
      <TvShowRecommendations :shows="recommendations.results" />
      <TvShowSimilar :shows="similar.results" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { tmdbService } from "../services/tmdb.service";
import type { ITvShowDetails } from "../interfaces/tv-show.interface";
import type { ICredits, IVideosResponse } from "../interfaces/media-extra.interface";
import type { IBaseApiResponse } from "../interfaces/api-response.interface";
import type { ITvShow } from "../interfaces/tv-show.interface";

import TvShowHero from "../components/tv-show-detail-view/TvShowHero.vue";
import TvShowOverview from "../components/tv-show-detail-view/TvShowOverview.vue";
import TvShowCast from "../components/tv-show-detail-view/TvShowCast.vue";
import TvShowVideos from "../components/tv-show-detail-view/TvShowVideos.vue";
import TvShowRecommendations from "../components/tv-show-detail-view/TvShowRecommendations.vue";
import TvShowSimilar from "../components/tv-show-detail-view/TvShowSimilar.vue";
import TvShowSeasons from "../components/tv-show-detail-view/TvShowSeasons.vue";
import TvShowEpisodes from "../components/tv-show-detail-view/TvShowEpisodes.vue";
import TvShowPoster from "@/components/tv-show-detail-view/TvShowPoster.vue";
import TvShowHeaderInfo from "@/components/tv-show-detail-view/TvShowHeaderInfo.vue";
import TvShowOverviewInfo from "../components/tv-show-detail-view/TvShowOverviewInfo.vue";
import TvShowExtraInfo from "@/components/tv-show-detail-view/TvShowExtraInfo.vue";
const route = useRoute();
const tvShowId = Number(route.params.id);

const selectedSeason = ref<number | undefined>(undefined);

const handleSeasonSelected = (seasonNumber: number) => {
  selectedSeason.value = seasonNumber;
};

onMounted(async () => {
  tvShow.value = await tmdbService.getTvSeriesDetails(tvShowId);

  if (Array.isArray(tvShow.value.seasons) && tvShow.value.seasons.length > 0) {
    selectedSeason.value = tvShow.value.seasons[0].season_number;
  }
  credits.value = await tmdbService.getTvSeriesCredits(tvShowId);
  videos.value = await tmdbService.getTvSeriesVideos(tvShowId);
  recommendations.value = await tmdbService.getTvSeriesRecommendations(tvShowId);
  similar.value = await tmdbService.getTvSeriesSimilar(tvShowId);

  selectedSeason.value = tvShow.value.seasons[0]?.season_number;
});

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
</script>

<style scoped lang="scss">
.tv-show-detail-layout {
  display: grid;
  grid-template-columns: 1fr 2fr 1.5fr; // izquierda, centro, derecha
  gap: 2rem;
  margin-top: 2rem;

  .left-column {
    border: 2px solid blue;
    padding: 1rem;
  }

  .center-column {
    border: 2px solid green;
    padding: 1rem;
  }

  .right-column {
    border: 2px solid red;
    padding: 1rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    .left-column,
    .center-column,
    .right-column {
      border-width: 1px;
    }
  }
}
</style>
