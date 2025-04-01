<template>
  <div class="movie-card" @click="navigateToDetail">
    <div class="poster">
      <img v-if="posterUrl" :src="posterUrl" :alt="title" class="image" loading="lazy" />
      <div v-else class="fallback-icon">
        <font-awesome-icon :icon="['fas', 'film']" />
      </div>
    </div>

    <div class="info">
      <h3 class="title">{{ title }}</h3>
      <div class="meta">
        <span class="rating">
          <font-awesome-icon :icon="['fas', 'star']" class="star-icon" />
          {{ rating }}
        </span>
        <span class="year">{{ releaseYear }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import type { IMedia } from "../interfaces/media-union.interface";
import type { IMovie } from "../interfaces/movie.interface";
import type { ITvShow } from "../interfaces/tv-show.interface";

const props = defineProps<{ movie: IMedia }>();

const router = useRouter();

const isMovie = (media: IMedia): media is IMovie => "title" in media;
const isShow = (media: ITvShow): media is ITvShow => "name" in media;

const title = computed(() => {
  if (isMovie(props.movie)) return props.movie.title;
  if (isShow(props.movie)) return props.movie.name;
  return "Sin título";
});

const posterUrl = computed(() =>
  props.movie.poster_path ? `https://image.tmdb.org/t/p/w500${props.movie.poster_path}` : undefined
);

const releaseYear = computed(() => {
  const date = isMovie(props.movie)
    ? props.movie.release_date
    : isShow(props.movie)
    ? props.movie.first_air_date
    : null;

  return date ? new Date(date).getFullYear() : "N/A";
});

const rating = computed(() => props.movie.vote_average.toFixed(1));

const navigateToDetail = () => {
  const route = isMovie(props.movie) ? "movie-detail" : "tv-show";
  router.push({ name: route, params: { id: props.movie.id } });
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/movie-card";
</style>
