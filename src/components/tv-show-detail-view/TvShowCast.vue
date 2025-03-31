<template>
  <section class="tv-show-cast" v-if="cast?.length">
    <h2 class="section-title">Reparto principal</h2>

    <div class="cast-grid">
      <div class="cast-card" v-for="person in cast" :key="person.id">
        <img
          v-if="person.profile_path"
          :src="`https://image.tmdb.org/t/p/w185${person.profile_path}`"
          :alt="person.name"
          class="cast-image"
        />
        <div class="cast-info">
          <h3 class="actor-name">{{ person.name }}</h3>
          <p class="character-name">{{ person.character }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ICastMember } from "@/interfaces/media-extra.interface";
const { cast } = defineProps<{ cast: ICastMember[] }>();
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;

.tv-show-cast {
  margin-top: 2rem;

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .cast-grid {
    display: grid;
    gap: 1.2rem;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }

  .cast-card {
    text-align: center;

    .cast-image {
      width: 100%;
      aspect-ratio: 2/3;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 0.5rem;
    }

    .actor-name {
      font-size: 0.95rem;
      font-weight: bold;
    }

    .character-name {
      font-size: 0.85rem;
      color: #ccc;
    }
  }
}
</style>
