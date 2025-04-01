<!-- src/components/tv-show-detail-view/TvShowHeaderInfo.vue -->
<template>
  <div class="media-header-info">
    <div class="top-info">
      <h1 class="title">{{ title }}</h1>
      <div class="meta">
        <span class="rating">{{ media.vote_average?.toFixed(1) }} ★</span>
        <span class="duration"> {{ duration }} min </span>

        <span class="status">{{ media.status }}</span>
      </div>
    </div>

    <div class="score-actions">
      <div class="score">Score: <strong>0.0</strong> / 0 rated</div>
      <div class="actions">
        <button class="like">👍 Like</button>
        <button class="dislike">👎 Dislike</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IMediaDetails } from "@/interfaces/media-union.interface";
import { isMovie, isTvShow } from "../../utils/media-type-guards";

const title = computed(() =>
  isMovie(media) ? media.title : isTvShow(media) ? media.name : "Untitled"
);

const duration = computed(() => {
  if (isMovie(media)) return media.runtime ? `${media.runtime} min` : "–";
  if (isTvShow(media))
    return media.episode_run_time?.[0] ? `${media.episode_run_time[0]} min` : "–";
  return "–";
});

const { media } = defineProps<{ media: IMediaDetails }>();
</script>

<style scoped lang="scss">
@use "../../assets/scss/views/media-header-info";
</style>
