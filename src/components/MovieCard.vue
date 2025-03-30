<template>
  <div class="movie-card" @click="navigateToDetail">
    <div class="poster">
      <img v-if="posterUrl" :src="posterUrl" :alt="getTitle" class="image" />
      <div v-else class="no-image">
        <font-awesome-icon :icon="['fas', 'film']" />
      </div>
    </div>
    <div class="info">
      <h3 class="title">{{ getTitle }}</h3>
      <div class="meta">
        <span class="rating">
          <font-awesome-icon :icon="['fas', 'star']" class="star-icon" />
          {{ movie.vote_average.toFixed(1) }}
        </span>
        <span class="year">{{ releaseYear }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import type { IMedia, IMovie, IShow } from "@/interfaces/show.interface";

const props = defineProps<{
  movie: IMedia;
}>();

const router = useRouter();

const posterUrl = computed(() => {
  if (!props.movie.poster_path) return null;
  return `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;
});

const isMovie = (media: IMedia): media is IMovie => {
  return "title" in media;
};

const isShow = (media: IMedia): media is IShow => {
  return "name" in media;
};

const getTitle = computed(() => {
  if (isMovie(props.movie)) {
    return props.movie.title;
  } else if (isShow(props.movie)) {
    return props.movie.name;
  }
  return "Sin título";
});

const releaseYear = computed(() => {
  if (isMovie(props.movie)) {
    return props.movie.release_date ? new Date(props.movie.release_date).getFullYear() : "N/A";
  } else if (isShow(props.movie)) {
    return props.movie.first_air_date ? new Date(props.movie.first_air_date).getFullYear() : "N/A";
  }
  return "N/A";
});

const navigateToDetail = () => {
  const route = isMovie(props.movie) ? "movie-detail" : "show-detail";

  router.push({
    name: route,
    params: { id: props.movie.id },
  });
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/movie-card";
</style>
