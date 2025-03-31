<template>
  <section class="tv-show-videos container" v-if="youtubeVideos.length">
    <h2 class="section-title">Vídeos</h2>
    <div class="video-grid">
      <div v-for="video in youtubeVideos" :key="video.id" class="video-item">
        <iframe
          :src="`https://www.youtube.com/embed/${video.key}`"
          :title="video.name"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IVideosResponse } from "@/interfaces/media-extra.interface";

const { videos } = defineProps<{
  videos: IVideosResponse["results"];
}>();

const youtubeVideos = computed(() => videos.filter((video) => video.site === "YouTube"));
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;

.tv-show-videos {
  margin-top: 2rem;

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
  }

  .video-item {
    aspect-ratio: 16 / 9;

    iframe {
      width: 100%;
      height: 100%;
      border-radius: $border-radius-md;
    }
  }
}
</style>
