<template>
  <section class="media-poster">
    <img v-if="posterUrl" :src="posterUrl" :alt="title" class="poster-image" />
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IMediaDetails } from "../../interfaces/media-union.interface";
import { isMovie, isTvShow } from "../../utils/media-type-guards";

const props = defineProps<{ media: IMediaDetails }>();

const posterUrl = computed(() =>
  props.media.poster_path ? `https://image.tmdb.org/t/p/w300${props.media.poster_path}` : undefined
);

const title = computed(() => {
  if (isMovie(props.media)) return props.media.title;
  if (isTvShow(props.media)) return props.media.name;
  return "Untitled";
});
</script>

<style scoped lang="scss">
@use "../../assets/scss/views/media-poster";
</style>
