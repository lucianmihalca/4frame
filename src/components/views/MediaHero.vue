<template>
  <section class="media-hero" :style="backgroundImageStyle">
    <div class="overlay">
      <div class="play-button">
        <font-awesome-icon :icon="['fas', 'circle-play']" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

import type { IMediaDetails } from "@/interfaces/media-union.interface";

const { media } = defineProps<{ media: IMediaDetails }>();

const backgroundImageStyle = computed(() => ({
  backgroundImage: media.backdrop_path
    ? `url(https://image.tmdb.org/t/p/original${media.backdrop_path})`
    : "none",
}));
</script>

<style scoped lang="scss">
@use "../../assets/scss/views/media-hero";
</style>
