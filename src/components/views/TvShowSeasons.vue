<template>
  <div class="tv-show-seasons-header">
    <div class="actions">
      <button class="action-button">
        <font-awesome-icon :icon="['fas', 'video']" />
        Trailer
      </button>
      <button class="action-button">
        <font-awesome-icon :icon="['far', 'heart']" />
        Add to favorite
      </button>
      <button class="action-button">
        <font-awesome-icon :icon="['far', 'comment']" />
        Comment
      </button>
    </div>

    <div class="season-selector">
      <font-awesome-icon :icon="['fas', 'list']" class="list-icon" />
      <select v-model="selectedId" @change="emitSelection">
        <option v-for="season in seasons" :key="season.id" :value="season.season_number">
          Season {{ season.season_number }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { ISeason } from "../../interfaces/media-base.interface";

const emit = defineEmits<{
  (e: "seasonSelected", seasonNumber: number): void;
}>();

const props = defineProps<{
  seasons: ISeason[];
  initialSeason?: number;
}>();

const selectedId = ref(props.initialSeason ?? props.seasons[0].season_number);

const emitSelection = () => {
  emit("seasonSelected", selectedId.value);
};

watch(
  () => props.initialSeason,
  (val) => {
    if (val !== undefined) selectedId.value = val;
  }
);
</script>

<style scoped lang="scss">
@use "../../assets/scss/views/tv-show-seasons";
</style>
