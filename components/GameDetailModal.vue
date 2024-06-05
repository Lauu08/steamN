<template>
    <div v-if="show" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <button class="close-button" @click="closeModal">✕</button>
        <div class="modal-content">
          <h2>{{ game.name }}</h2>
          <img :src="game.image" alt="Game Image" class="game-image" />
          <div class="game-pricing">
            <button class="price-button">{{ game.price }}</button>
            <button class="price-button">{{ game.price }}</button>
            <button class="price-button">{{ game.price }}</button>
          </div>
          <div class="tabs">
            <button :class="{ active: activeTab === 'description' }" @click="activeTab = 'description'">Descripción</button>
            <button :class="{ active: activeTab === 'information' }" @click="activeTab = 'information'">Información</button>
          </div>
          <div v-if="activeTab === 'description'" class="tab-content">
            <p>{{ game.descripcion }}</p>
          </div>
          <div v-else class="tab-content">
            <p>{{ game.informacion }}</p>
          </div>
          <div class="categories">
            <h3>Categorías</h3>
            <div class="category" v-for="category in game.categorias" :key="category">{{ category }}</div>
          </div>
          <div class="reviews">
            <h3>Reseñas del juego</h3>
            <div v-for="review in game.reseñas" :key="review" class="review">
              <p>{{ review }}</p>
            </div>
          </div>
          <div class="similar-games">
            <h3>Juegos similares</h3>
            <div class="similar-games-grid">
              <div class="similar-game" v-for="similar in similarGames" :key="similar.name">
                <img :src="similar.image" :alt="similar.name" />
                <p>{{ similar.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, computed } from 'vue';
  
  const props = defineProps({
    show: Boolean,
    game: Object
  });
  
  const emit = defineEmits(['close']);
  
  const activeTab = ref('description');
  
  const closeModal = () => {
    emit('close');
  };
  
  watch(() => props.show, (newVal) => {
    if (!newVal) {
      activeTab.value = 'description';
    }
  });
  
  const mockData = [
    { name: 'Juego 1', price: '$20', image: '/imgcard01.png', descripcion: 'Descripción del Juego 1', categorias: ['rol', 'aventura', 'accion'], reseñas: ['Reseña 1', 'Reseña 2'], informacion: 'Información técnica del Juego 1' },
    { name: 'Juego 2', price: '$25', image: '/imgcard02.png', descripcion: 'Descripción del Juego 2', categorias: ['rol', 'aventura', 'accion'], reseñas: ['Reseña 1', 'Reseña 2'], informacion: 'Información técnica del Juego 2' },
    { name: 'Juego 3', price: '$30', image: '/imgcard03.png', descripcion: 'Descripción del Juego 3', categorias: ['rol', 'aventura', 'accion'], reseñas: ['Reseña 1', 'Reseña 2'], informacion: 'Información técnica del Juego 3' },
    { name: 'Juego 4', price: '$35', image: '/imgcard04.png', descripcion: 'Descripción del Juego 4', categorias: ['rol', 'aventura', 'accion'], reseñas: ['Reseña 1', 'Reseña 2'], informacion: 'Información técnica del Juego 4' },
    { name: 'Juego 5', price: '$35', image: '/imgcard05.jfif', descripcion: 'Descripción del Juego 5', categorias: ['rol', 'aventura', 'accion'], reseñas: ['Reseña 1', 'Reseña 2'], informacion: 'Información técnica del Juego 5' },
    { name: 'Juego 6', price: '$35', image: '/imgcard06.jpg', descripcion: 'Descripción del Juego 6', categorias: ['rol', 'aventura', 'accion'], reseñas: ['Reseña 1', 'Reseña 2'], informacion: 'Información técnica del Juego 6' },
  ];
  
  const similarGames = computed(() => {
    if (props.game && props.game.categorias) {
      return mockData.filter(game => game.categorias.some(category => props.game.categorias.includes(category)) && game.name !== props.game.name);
    }
    return [];
  });
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow-y: auto; /* scroll vertical */
  }
  
  .modal {
    background: #e5e5e5;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 800px;
    position: relative;
    text-align: center;
    max-height: 90%; /* altura del modal */
    overflow-y: auto; /* scroll dentro del modal */
  }
  
  .close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #c714e4;
  }
  
  .modal h2 {
    margin: 0;
    color: #c714e4;
  }
  
  .game-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  
  .game-pricing {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .price-button {
    background: #c714e4;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
  }
  
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .tabs button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
  }
  
  .tabs button.active {
    color: #c714e4;
    font-weight: bold;
    border-bottom: 2px solid #c714e4;
  }
  
  .tab-content {
    text-align: left;
    margin-bottom: 20px;
  }
  
  .categories, .reviews, .similar-games {
    text-align: left;
    margin-bottom: 20px;
  }
  
  .category, .review, .similar-game {
    margin-bottom: 10px;
  }
  
  .similar-games-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
  
  .similar-game img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .category {
    display: inline-block;
    background: #c714e4;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 5px;
  }
@media (max-width: 658px) {
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow-y: auto; /* scroll vertical */
  }
  
  .modal {
    background: #e5e5e5;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 200px;
    position: relative;
    text-align: center;
    max-height: 60%; /* altura del modal */
    overflow-y: auto; /* scroll dentro del modal */
  }
  
  .close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #c714e4;
  }
  
  .modal h2 {
    margin: 0;
    color: #c714e4;
  }
  
  .game-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  
  .game-pricing {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .price-button {
    background: #c714e4;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
  }
  
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .tabs button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
  }
  
  .tabs button.active {
    color: #c714e4;
    font-weight: bold;
    border-bottom: 2px solid #c714e4;
  }
  
  .tab-content {
    text-align: left;
    margin-bottom: 20px;
  }
  
  .categories, .reviews, .similar-games {
    text-align: left;
    margin-bottom: 20px;
  }
  
  .category, .review, .similar-game {
    margin-bottom: 10px;
  }
  
  .similar-games-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
  
  .similar-game img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .category {
    display: inline-block;
    background: #c714e4;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 5px;
  }
}
  </style>
  