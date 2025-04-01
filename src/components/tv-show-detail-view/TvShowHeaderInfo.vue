<!-- src/components/tv-show-detail-view/TvShowHeaderInfo.vue -->
<template>
  <div class="tv-show-header-info">
    <div class="top-info">
      <h1 class="title">{{ tvShow.name }}</h1>
      <div class="meta">
        <span class="rating">{{ tvShow.vote_average?.toFixed(1) }} ★</span>
        <span class="duration"> {{ tvShow.episode_run_time?.[0] || "–" }} min </span>

        <span class="status">{{ tvShow.status }}</span>
      </div>
    </div>

    <div class="score-actions">
      <div class="score">Score: <strong>0.0</strong> / 0 rated</div>
      <div class="actions">
        <button class="like">👍 Like</button>
        <button class="dislike">👎 Dislike</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITvShowDetails } from "@/interfaces/tv-show.interface";

defineProps<{ tvShow: ITvShowDetails }>();
</script>

<style scoped lang="scss">
.tv-show-header-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;

  .top-info {
    .title {
      font-size: 1.8rem;
      font-weight: bold;
    }

    .meta {
      margin-top: 0.5rem;
      font-size: 0.95rem;
      color: #ccc;
      display: flex;
      gap: 1rem;
    }
  }

  .score-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;

    .score {
      font-size: 0.95rem;
    }

    .actions {
      display: flex;
      gap: 0.5rem;

      button {
        padding: 0.3rem 0.8rem;
        border-radius: 6px;
        background-color: rgba(255, 255, 255, 0.1);
        border: none;
        color: white;
        cursor: pointer;
        font-size: 0.85rem;

        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
}
</style>
