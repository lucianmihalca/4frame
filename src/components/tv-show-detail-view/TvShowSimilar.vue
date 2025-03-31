<template>
  <section class="tv-show-similars" v-if="shows?.length">
    <h2 class="section-title">Series similares</h2>

    <div class="similars-grid">
      <div v-for="show in shows" :key="show.id" class="similar-card" @click="goToDetail(show.id)">
        <img
          v-if="show.poster_path"
          :src="`https://image.tmdb.org/t/p/w185${show.poster_path}`"
          :alt="show.name"
          class="poster"
        />
        <p class="title">{{ show.name }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type { ITvShow } from "@/interfaces/tv-show.interface";

const { shows } = defineProps<{ shows: ITvShow[] }>();
const router = useRouter();

const goToDetail = (id: number) => {
  router.push({ name: "tv-show", params: { id } });
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;

.tv-show-similars {
  margin-top: 2rem;

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .similars-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }

  .similar-card {
    cursor: pointer;
    text-align: center;

    .poster {
      width: 100%;
      aspect-ratio: 2/3;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 0.5rem;
    }

    .title {
      font-size: 0.9rem;
      font-weight: bold;
      color: white;
    }
  }
}
</style>
