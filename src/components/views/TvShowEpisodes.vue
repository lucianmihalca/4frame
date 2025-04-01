<template>
  <section class="tv-show-episodes" v-if="episodes.length">
    <div class="episodes-header"></div>

    <div class="episodes-list">
      <div class="episode-pill" v-for="episode in limitedEpisodes" :key="episode.id">
        <span class="play-icon">
          <font-awesome-icon :icon="['fas', 'play']" />
        </span>
        <span class="episode-number">
          <strong>Eps {{ episode.episode_number }}: Temporada {{ seasonNumber }}</strong>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { watch, ref, computed } from "vue";
import { tmdbService } from "@/services/tmdb.service";
import type { IEpisode } from "@/interfaces/media-extra.interface";

const props = defineProps<{
  tvShowId: number;
  seasonNumber: number;
}>();

const episodes = ref<IEpisode[]>([]);

// Limitar a 12 episodios máximo
const limitedEpisodes = computed(() => episodes.value.slice(0, 12));

const fetchEpisodes = async () => {
  episodes.value = await tmdbService.getTvSeriesEpisodes(props.tvShowId, props.seasonNumber);
};

watch(() => props.seasonNumber, fetchEpisodes, { immediate: true });
</script>

<style scoped lang="scss">
@use "../../assets/scss/views/_tv-show-episodes";
</style>
