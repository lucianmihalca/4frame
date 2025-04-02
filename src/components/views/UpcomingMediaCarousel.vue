<!-- UpcomingMediaCarousel.vue -->
<template>
  <section class="upcoming-media-carousel">
    <transition-group name="slide" tag="div" class="slider-wrapper">
      <div class="slide" v-if="current" :key="current.id" :style="backgroundImageStyle">
        <div class="gradient-spotlight"></div>
      </div>
    </transition-group>

    <div class="overlay">
      <transition name="fade-slide" mode="out-in">
        <div class="content" v-if="current" :key="current.id">
          <h2 class="title">{{ getTitle(current) }}</h2>
          <p class="overview">{{ current.overview }}</p>
          <button class="watch-button" @click="goToDetail(current)">
            <font-awesome-icon :icon="['fas', 'circle-play']" />
            <span>Watch now</span>
          </button>
        </div>
      </transition>

      <div class="dots">
        <span
          v-for="(_, index) in items"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="setSlide(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, computed, onUnmounted, watch } from "vue";
import type { IMedia } from "@/interfaces/media-union.interface";

const router = useRouter();

const goToDetail = (media: IMedia) => {
  const routeName = props.titleKey === "title" ? "movie-detail" : "tv-show";
  router.push({ name: routeName, params: { id: media.id } });
};

const props = defineProps<{
  items: IMedia[];
  titleKey: "title" | "name";
}>();

const currentIndex = ref(0);
const intervalId = ref<ReturnType<typeof setInterval> | null>(null);

const current = computed(() => props.items[currentIndex.value] || null);

const backgroundImageStyle = computed(() => {
  if (!current.value?.backdrop_path) return { backgroundColor: "#000" };
  return {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${current.value.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
});

const getTitle = (media: IMedia): string => {
  if ("title" in media && props.titleKey === "title") {
    return media.title;
  } else if ("name" in media && props.titleKey === "name") {
    return media.name;
  }
  return "Untitled";
};

const setSlide = (index: number) => {
  currentIndex.value = index;
  resetTimer();
};

const resetTimer = () => {
  if (intervalId.value) clearInterval(intervalId.value);
  intervalId.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.items.length;
  }, 5000);
};

watch(
  () => props.items,
  (newItems) => {
    if (newItems.length) resetTimer();
  },
  { immediate: true, deep: true }
);

onUnmounted(() => {
  if (intervalId.value) clearInterval(intervalId.value);
});
</script>

<style scoped lang="scss">
@use "../../assets/scss/views/upcoming-media-carousel";
</style>
