<template>
  <section class="tv-show-seasons" v-if="tvShow.seasons?.length">
    <h2 class="section-title">Temporadas</h2>

    <div class="seasons-grid">
      <div class="season-card" v-for="season in tvShow.seasons" :key="season.id">
        <img
          v-if="season.poster_path"
          :src="`https://image.tmdb.org/t/p/w300${season.poster_path}`"
          :alt="season.name"
          class="season-poster"
        />
        <div class="season-info">
          <h3>{{ season.name }}</h3>
          <p class="season-meta">
            {{ season.air_date ? formatDate(season.air_date) : "Sin fecha" }} •
            {{ season.episode_count }} episodios
          </p>
          <p class="season-overview">{{ season.overview || "Sin descripción." }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ITvShowDetails } from "@/interfaces/tv-show.interface";

const { tvShow } = defineProps<{ tvShow: ITvShowDetails }>();

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;

.tv-show-seasons {
  margin-top: 2rem;

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .seasons-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  .season-card {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    overflow: hidden;

    .season-poster {
      width: 100%;
      object-fit: cover;
    }

    .season-info {
      padding: 1rem;

      h3 {
        font-size: 1.1rem;
        margin-bottom: 0.3rem;
      }

      .season-meta {
        font-size: 0.9rem;
        color: #ccc;
        margin-bottom: 0.5rem;
      }

      .season-overview {
        font-size: 0.9rem;
        line-height: 1.4;
        color: #ddd;
      }
    }
  }
}
</style>
