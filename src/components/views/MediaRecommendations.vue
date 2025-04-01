<template>
  <section class="media-recommendations container" v-if="shows.length">
    <h2 class="section-title">Recommendations</h2>

    <div class="grid">
      <MovieCard v-for="show in limitedShows" :key="show.id" :movie="show" />
    </div>
  </section>
</template>

<script setup lang="ts">
import MovieCard from "../../components/MovieCard.vue";

import type { IMedia } from "@/interfaces/media-union.interface";
import { computed } from "vue";

const { shows } = defineProps<{
  shows: IMedia[];
}>();

const limitedShows = computed(() => shows.slice(0, 7));
</script>

<style scoped lang="scss">
@use "../../assets/scss/views/media-recommendations";
</style>
