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
import type { ISeason } from "@/interfaces/media-base.interface";

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
@use "@/assets/scss/variables" as *;

.tv-show-seasons-header {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 1.5rem 0;

  // Centrado en móviles
  @media (max-width: 768px) {
    .actions,
    .season-selector {
      justify-content: center;
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;

    .action-button {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.4rem 0.8rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 999px;
      background: transparent;
      color: white;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      svg {
        font-size: 0.9rem;
      }
    }
  }

  .season-selector {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .list-icon {
      font-size: 1.1rem;
      color: #ccc;
    }

    select {
      cursor: pointer;
      min-width: 140px;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      padding: 0.4rem 0.8rem;
      color: white;
      font-size: 0.9rem;

      option {
        color: black;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
  }
}
</style>
