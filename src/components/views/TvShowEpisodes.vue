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
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;

.tv-show-episodes {
  margin-top: 2rem;

  .episodes-header {
    margin-bottom: 1rem;

    .section-title {
      font-size: 1.5rem;
    }
  }

  .episodes-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .episode-pill {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 0.6rem 1rem;
    border-radius: 999px;
    color: #ccc;
    font-size: 0.9rem;
    min-width: 200px;

    .play-icon {
      margin-right: 0.5rem;
      color: #888;
    }

    .episode-number {
      margin-right: 0.3rem;
      font-weight: 600;
    }

    .episode-name {
      white-space: nowrap;
    }
  }
}
</style>
