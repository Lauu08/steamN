<template>
  <div class="carousel">
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="slide" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>
    <button class="prev" @click="prevSlide">&lt;</button>
    <button class="next" @click="nextSlide">&gt;</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const slides = ref([
  { src: '/carrousel01.svg', alt: 'Slide 1' },
  { src: '/carrousel02.png', alt: 'Slide 2' },
  { src: '/carrousel03.svg', alt: 'Slide 3' }
]);
const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex: 0 0 100%;
}

img {
  width: 100%;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}
</style>