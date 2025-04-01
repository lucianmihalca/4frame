<template>
  <section class="tv-show-poster">
    <img
      v-if="tvShow.poster_path"
      :src="`https://image.tmdb.org/t/p/w300${tvShow.poster_path}`"
      :alt="tvShow.name"
      class="poster-image"
    />
  </section>
</template>

<script setup lang="ts">
import type { ITvShowDetails } from "@/interfaces/tv-show.interface";

const { tvShow } = defineProps<{ tvShow: ITvShowDetails }>();
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.tv-show-poster {
  display: flex;
  justify-content: center;

  .poster-image {
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
}
</style>
