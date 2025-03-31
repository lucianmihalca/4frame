<template>
  <section class="tv-show-hero" :style="backgroundImageStyle">
    <div class="overlay">
      <div class="content container">
        <h1 class="title">{{ tvShow.name }}</h1>
        <p v-if="tvShow.tagline" class="tagline">{{ tvShow.tagline }}</p>
        <div class="meta">
          <span class="rating">
            <font-awesome-icon :icon="['fas', 'star']" class="star-icon" />
            {{ tvShow.vote_average ? tvShow.vote_average.toFixed(1) : "0.0" }}
          </span>
          <span class="year">{{ releaseYear }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ITvShowDetails } from "@/interfaces/tv-show.interface";
import { computed } from "vue";

const props = defineProps<{
  tvShow: ITvShowDetails;
}>();

const backgroundImageStyle = computed(() => {
  return props.tvShow.backdrop_path
    ? {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${props.tvShow.backdrop_path})`,
      }
    : {};
});

const releaseYear = computed(() => {
  return props.tvShow.first_air_date ? new Date(props.tvShow.first_air_date).getFullYear() : "";
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;

.tv-show-hero {
  position: relative;
  background-size: cover;
  background-position: center;
  min-height: 60vh;
  color: white;

  .overlay {
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 2rem 0;
  }

  .content {
    max-width: 1000px;

    .title {
      font-size: 2rem;
      font-weight: bold;
    }

    .tagline {
      margin-top: 0.5rem;
      font-style: italic;
    }

    .meta {
      margin-top: 1rem;
      display: flex;
      gap: 1.5rem;
      align-items: center;

      .rating {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }

      .star-icon {
        color: gold;
      }
    }
  }
}
</style>
