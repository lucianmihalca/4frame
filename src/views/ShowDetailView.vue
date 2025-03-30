<template>
  <div class="show-detail">
    <div v-if="loading" class="show-detail__loading">
      <p>Cargando detalles de la serie...</p>
    </div>

    <div v-else-if="error" class="show-detail__error">
      <p>{{ error }}</p>
    </div>

    <div v-else-if="show" class="show-detail__content">
      <h1>{{ show.name }}</h1>
      <p>Página en construcción...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { tmdbService } from "@/services/tmdb.service";
import type { IShowDetails } from "@/interfaces/show.interface";

const route = useRoute();
const show = ref<IShowDetails | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  const id = Number(route.params.id);
  try {
    const data = await tmdbService.getTvSeriesDetails(id);
    show.value = data;
  } catch (err) {
    console.error("Error fetching show details:", err);
    error.value = "Error al cargar los detalles de la serie. Por favor, intenta de nuevo.";
  } finally {
    loading.value = false;
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;

.show-detail {
  padding: $spacing-lg 0;

  &__loading,
  &__error {
    text-align: center;
    padding: $spacing-xxl 0;
  }

  &__error {
    color: #ef4444;
  }
}
</style>
