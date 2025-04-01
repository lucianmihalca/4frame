<template>
  <div class="tv-show-overview-info">
    <p class="overview-text">
      {{ tvShow.overview || "Sin descripción disponible." }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { ITvShowDetails } from "@/interfaces/tv-show.interface";

defineProps<{ tvShow: ITvShowDetails }>();
</script>

<style scoped lang="scss">
.tv-show-overview-info {
  margin: 1.5rem 0;

  .overview-text {
    font-size: 1rem;
    line-height: 1.6;
    color: #ddd;
  }
}
</style>
