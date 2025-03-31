<template>
  <section class="tv-show-overview container">
    <h2 class="section-title">Descripción</h2>
    <p class="overview">{{ tvShow.overview }}</p>

    <div class="details-grid">
      <!-- Géneros -->
      <div class="detail-item" v-if="tvShow.genres?.length">
        <h3>Géneros</h3>
        <ul>
          <li v-for="genre in tvShow.genres" :key="genre.id">{{ genre.name }}</li>
        </ul>
      </div>

      <!-- Duración -->
      <div class="detail-item" v-if="tvShow.episode_run_time?.length">
        <h3>Duración promedio</h3>
        <p>{{ tvShow.episode_run_time[0] }} min</p>
      </div>

      <!-- Creadores -->
      <div class="detail-item" v-if="tvShow.created_by?.length">
        <h3>Creado por</h3>
        <ul>
          <li v-for="creator in tvShow.created_by" :key="creator.id">
            {{ creator.name }}
          </li>
        </ul>
      </div>

      <!-- Estado -->
      <div class="detail-item">
        <h3>Estado</h3>
        <p>{{ tvShow.in_production ? "En emisión" : "Finalizada" }} ({{ tvShow.status }})</p>
      </div>

      <!-- Último episodio -->
      <div class="detail-item" v-if="tvShow.last_air_date">
        <h3>Última emisión</h3>
        <p>{{ formatDate(tvShow.last_air_date) }}</p>
      </div>

      <!-- Página oficial -->
      <div class="detail-item" v-if="tvShow.homepage">
        <h3>Sitio oficial</h3>
        <a :href="tvShow.homepage" target="_blank" rel="noopener noreferrer">
          {{ tvShow.homepage }}
        </a>
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

.tv-show-overview {
  margin-top: 2rem;

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .overview {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .details-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

    .detail-item {
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
}
</style>
