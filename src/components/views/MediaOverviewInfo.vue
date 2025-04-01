<template>
  <div class="media-overview-info">
    <h2>Overview</h2>
    <p class="overview-text">
      {{ media.overview || "Sin descripción disponible." }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { IMediaDetails } from "../../interfaces/media-union.interface";

const { media } = defineProps<{ media: IMediaDetails }>();
</script>

<style scoped lang="scss">
@use "../../assets/scss/views/media-overview-info";
</style>
