<template>
  <section class="tv-show-hero" :style="backgroundImageStyle">
    <div class="overlay">
      <button class="play-button" aria-label="Reproducir">
        <font-awesome-icon :icon="['fas', 'circle-play']" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ITvShowDetails } from "@/interfaces/tv-show.interface";
import { computed } from "vue";

const { tvShow } = defineProps<{ tvShow: ITvShowDetails }>();

const backgroundImageStyle = computed(() => ({
  backgroundImage: tvShow.backdrop_path
    ? `url(https://image.tmdb.org/t/p/original${tvShow.backdrop_path})`
    : "none",
}));
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;

.tv-show-hero {
  position: relative;
  min-height: calc(100vh - 410px);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .play-button {
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid white;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    font-size: 4rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.25);
    }
  }
}
</style>
