<template>
  <div class="media-extra-info">
    <div class="info-item" v-if="media.genres?.length">
      <h3>Genres</h3>
      <p>{{ media.genres.map((genre) => genre.name).join(", ") }}</p>
    </div>

    <div class="info-item" v-if="isTvShow(media) && media.created_by?.length">
      <h3>Created by</h3>
      <p>{{ media.created_by.map((c) => c.name).join(", ") }}</p>
    </div>

    <div class="info-item" v-if="media.status">
      <h3>Status</h3>
      <p>{{ isTvShow(media) && media.in_production ? "Ongoing" : "Ended" }} ({{ media.status }})</p>
    </div>

    <div class="info-item" v-if="isTvShow(media) && media.last_air_date">
      <h3>Last aired</h3>
      <p>{{ formatDate(media.last_air_date) }}</p>
    </div>

    <div class="info-item" v-if="media.homepage">
      <h3>Official site</h3>
      <a :href="media.homepage" target="_blank" rel="noopener noreferrer">
        {{ media.homepage }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IMediaDetails } from "@/interfaces/media-union.interface";
import { isTvShow } from "@/utils/media-type-guards";

const { media } = defineProps<{ media: IMediaDetails }>();

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
@use "../../assets/scss/views/media-extra-info";
</style>
