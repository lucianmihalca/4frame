<template>
  <section class="tv-show-recommendations container" v-if="shows.length">
    <h2 class="section-title">Recomendaciones</h2>

    <div class="grid">
      <MovieCard v-for="show in limitedShows" :key="show.id" :movie="show" />
    </div>
  </section>
</template>

<script setup lang="ts">
import MovieCard from "@/components/MovieCard.vue";
import type { ITvShow } from "@/interfaces/tv-show.interface";
import { computed } from "vue";

const { shows } = defineProps<{
  shows: ITvShow[];
}>();

const limitedShows = computed(() => shows.slice(0, 7));
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;

.tv-show-recommendations {
  margin-top: 2rem;

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
