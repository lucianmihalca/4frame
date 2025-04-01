<template>
  <div class="tv-show-extra-info">
    <div class="info-item" v-if="tvShow.genres?.length">
      <h3>Géneros</h3>
      <ul>
        <li v-for="genre in tvShow.genres" :key="genre.id">{{ genre.name }}</li>
      </ul>
    </div>

    <div class="info-item" v-if="tvShow.created_by?.length">
      <h3>Creado por</h3>
      <ul>
        <li v-for="creator in tvShow.created_by" :key="creator.id">{{ creator.name }}</li>
      </ul>
    </div>

    <div class="info-item">
      <h3>Estado</h3>
      <p>{{ tvShow.in_production ? "En emisión" : "Finalizada" }} ({{ tvShow.status }})</p>
    </div>

    <div class="info-item" v-if="tvShow.last_air_date">
      <h3>Última emisión</h3>
      <p>{{ formatDate(tvShow.last_air_date) }}</p>
    </div>

    <div class="info-item" v-if="tvShow.homepage">
      <h3>Sitio oficial</h3>
      <a :href="tvShow.homepage" target="_blank" rel="noopener noreferrer">
        {{ tvShow.homepage }}
      </a>
    </div>
  </div>
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
.tv-show-extra-info {
  display: grid;
  gap: 1.5rem;

  .info-item {
    h3 {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    p,
    li {
      font-size: 0.9rem;
      line-height: 1.4;
    }

    a {
      color: $secondary-color;
      text-decoration: underline;
    }
  }
}
</style>
