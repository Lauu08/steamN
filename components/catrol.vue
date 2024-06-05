<template>
    <section class="category-section">
      <div class="category-header">
        <p class="offers-label">Rol</p>
        <NuxtLink to="/catrol" class="view-all-link">Ver todas</NuxtLink>
      </div>
      <div class="game-carousel">
        <div class="slides">
          <div class="slide" v-for="(game, index) in games.slice(0, 4)" :key="index">
            <div class="game-card" @click="openModal(game)">
            <img :src="game.image" :alt="game.name" />
            <div class="titulo_juego">
              <p>{{ game.name }}</p>
            </div>
            <div class="game-info">
              <div class="imginfo">
                <img src="../public/carritoblanco.png" alt="carrito_blanco" />
                <img src="../public/corazonblanco.png" alt="corazon_blanco" />
              </div>
              <p class="tachado">{{ game.price }}</p>
              <p>{{ game.price }}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    <GameDetailModal v-if="showModal" :show="showModal" :game="selectedGame" @close="closeModal" />

  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import GameDetailModal from '~/components/GameDetailModal.vue';

  const games = ref([]);
  
  // Mock data de juegos
  const mockData = [
  { name: 'RATCHET CLANK', price: '20€', image: '/imgcard01.png', descripcion: 'Descripción del Juego 1', categorias: ['rol', 'aventura', 'accion'], reseñas: ['Reseña 1', 'Reseña 2'], informacion: 'Información técnica del Juego 1' },
  { name: 'Bloodborne', price: '25€', image: '/imgcard02.png', descripcion: 'Descripción del Juego 2', categorias: ['rol', 'aventura', 'accion'], reseñas: ['Reseña 1', 'Reseña 2'], informacion: 'Información técnica del Juego 2' },
  { name: 'STAR WARS Jedi Survivor', price: '30€', image: '/imgcard03.png', descripcion: 'Descripción del Juego 3', categorias: ['rol', 'aventura', 'accion'], reseñas: ['Reseña 1', 'Reseña 2'], informacion: 'Información técnica del Juego 3' },
  { name: 'The legend of ZELDA', price: '35€', image: '/imgcard04.png', descripcion: 'Descripción del Juego 4', categorias: ['rol', 'aventura', 'accion'], reseñas: ['Reseña 1', 'Reseña 2'], informacion: 'Información técnica del Juego 4' },
  { name: 'THE LAST OF US', price: '35€', image: '/imgcard05.jfif', descripcion: 'Descripción del Juego 5', categorias: ['rol', 'aventura', 'accion'], reseñas: ['Reseña 1', 'Reseña 2'], informacion: 'Información técnica del Juego 5' },
  { name: 'Horizon Zero Dawn', price: '35€', image: '/imgcard06.jpg', descripcion: 'Descripción del Juego 6', categorias: ['rol', 'aventura', 'accion'], reseñas: ['Reseña 1', 'Reseña 2'], informacion: 'Información técnica del Juego 6' },
];
  
  onMounted(() => {
    games.value = mockData;
  });

  const showModal = ref(false);
const selectedGame = ref(null);

const openModal = (game) => {
  selectedGame.value = game;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedGame.value = null;
};
  </script>
  
  <style scoped>
  .category-section {
    padding: 0px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 40px;
  }
  
  .category-section h2 {
    margin-bottom: 20px;
  }
  
  .category-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
  }
  
  .offers-label {
    margin: 0;
    margin-left: 10px;
    font-weight: bold;
  }
  
  .view-all-link {
    color: #C714E4;
    cursor: pointer;
    text-decoration: none;
    margin-right: 80px;
  }
  
  .view-all-link:hover {
    color: #007bff;
  }
  
  .game-carousel {
    overflow: hidden;
    margin-top: 20px;
    position: relative;
    padding-left: 50px;
  }
  
  .slides {
    display: flex;
  }
  
  .slide {
    flex: 0 0 25%; 
  }
  
  .game-card {
    background-color: #2B2B2B;
    border-radius: 5px;
    text-align: center;
    margin-left: 70px;
    border-radius: 10%;
    width: 200px;
    height: 240px;
    cursor: pointer;

  }
  
  .game-card:hover {
    background-color: #C714E4;
  }
  
  .game-card img {
    width: 100%;
    height: 150px;
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
  }
  
  .game-info {
    display: flex;
    margin-top: 10px;
  }
  
  .game-info p {
    margin: 5px 0;
    color:white;
  }

  .titulo_juego p {
  margin: 2px 5px;
  color: white;
}

  .tachado {
  text-decoration: line-through;
  font-size: 12px;
}

.game-info img{
 width: 20px;
 height: 20px;
 padding: 2px;
 padding-left: 10px;
}

.imginfo{
  padding-right: 70px;
}
@media (max-width: 658px) {

/* .grid-container {
  display: column;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px 80px 20px;
} */
.game-carousel {
  padding-left: 0px;
  margin-left: 0px;
}
.game-card {
  display: flex;
  align-items: center;
  border-radius: 40px;
  cursor: pointer;
  width: 330px;
  height: 80px;
  margin: 0px;
}

.game-card img {
  width: 80px;
  height: 80px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-top-right-radius: 0px;
  margin: 10px 10px 10px 0px
}
.titulo_juego  {
  padding-bottom: 30px;
  margin: 10px 0px 10px 0px;
  font-size: 10px;
  width: 80px;
}
.titulo_juego p {
  font-size: 10px;
}
.game-info {
    display: flex;
    margin: 40px 30px 0px 0px;
  }
  
.game-info p {
  margin-bottom: 80px;
  margin-right: 10px;
}

.imginfo {
  display: flex;
  margin-top: 30px;
  padding: 10px;
  padding-left: 0px;
}

.imginfo img {
  width: 15px;
  height: 15px;
  margin-right: 0px;
}

.tachado {
  font-size: 10px;
}

.slides {
  display: block;
  
}
.slide{
  padding-bottom: 10px;
}
}
  </style>
  