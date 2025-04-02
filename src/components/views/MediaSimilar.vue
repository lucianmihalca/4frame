<template>
  <section class="media-similar">
    <h2 class="section-title" v-if="limitedShows.length">Similar titles</h2>

    <div class="similars-grid" v-if="limitedShows.length">
      <div
        v-for="show in limitedShows"
        :key="show.id"
        class="similar-card"
        @click="goToDetail(show)"
      >
        <img
          v-if="show.poster_path"
          :src="`https://image.tmdb.org/t/p/w185${show.poster_path}`"
          :alt="getTitle(show)"
          class="poster"
        />
        <p class="title">{{ getTitle(show) }}</p>
      </div>
    </div>

    <div v-else class="no-similar">
      <p>No similar titles found.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type { IMedia } from "@/interfaces/media-union.interface";
import { computed } from "vue";

const { shows } = defineProps<{ shows: IMedia[] }>();
const router = useRouter();

const limitedShows = computed(() => shows.slice(0, 7));

const getTitle = (media: IMedia): string =>
  "title" in media ? media.title : "name" in media ? media.name : "Untitled";

const goToDetail = (media: IMedia) => {
  const route = "title" in media ? "movie-detail" : "tv-show";
  router.push({ name: route, params: { id: media.id } });
};
</script>

<style scoped lang="scss">
@use "../../assets/scss/views/media-similar";
</style>
