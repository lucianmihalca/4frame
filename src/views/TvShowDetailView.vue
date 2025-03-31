<template>
  <div class="tv-show-detail-view">
    <TvShowHero :tvShow="tvShow" />
    <TvShowOverview :tvShow="tvShow" />
    <TvShowCast :cast="credits.cast" />
    <TvShowVideos :videos="videos.results" />
    <TvShowRecommendations :shows="recommendations.results" />
    <TvShowSimilar :shows="similar.results" />
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

onMounted(async () => {
  tvShow.value = await tmdbService.getTvSeriesDetails(tvShowId);
  credits.value = await tmdbService.getTvSeriesCredits(tvShowId);
  videos.value = await tmdbService.getTvSeriesVideos(tvShowId);
  recommendations.value = await tmdbService.getTvSeriesRecommendations(tvShowId);
  similar.value = await tmdbService.getTvSeriesSimilar(tvShowId);
});
</script>

<style scoped>
.tv-show-detail-view {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
