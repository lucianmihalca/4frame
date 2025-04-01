<template>
  <div class="tv-show-extra-info">
    <div class="info-item" v-if="tvShow.genres?.length">
      <h3>Genres</h3>
      <p>{{ tvShow.genres.map((genre) => genre.name).join(", ") }}</p>
    </div>

    <div class="info-item" v-if="tvShow.created_by?.length">
      <h3>Created by</h3>
      <p>{{ tvShow.created_by.map((c) => c.name).join(", ") }}</p>
    </div>

    <div class="info-item">
      <h3>Status</h3>
      <p>{{ tvShow.in_production ? "Ongoing" : "Ended" }} ({{ tvShow.status }})</p>
    </div>

    <div class="info-item" v-if="tvShow.last_air_date">
      <h3>Last aired</h3>
      <p>{{ formatDate(tvShow.last_air_date) }}</p>
    </div>

    <div class="info-item" v-if="tvShow.homepage">
      <h3>Official site</h3>
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
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<style scoped lang="scss">
@use "../../assets//scss/views/tv-show-extra-info";
</style>
