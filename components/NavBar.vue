<template>
  <nav class="navbar">
    <div class="logo">
      <NuxtLink to="/">
        <img src="/steam.png" alt="Steam logo" />
      </NuxtLink>
    </div>
    <button class="menu-toggle" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </button>
    <ul :class="{ 'nav-links': true, 'open': menuOpen }">
      <li>
        <NuxtLink to="/tienda" :class="{ active: route.path === '/tienda' }">Tienda</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/comunidad" :class="{ active: route.path === '/comunidad' }">Comunidad</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/categorias" :class="{ active: route.path === '/categorias' }">Categorías</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/puntos" :class="{ active: route.path === '/puntos' }">Puntos</NuxtLink>
      </li>
      <li class="mobile-login" v-if="!currentUser">
        <button @click="showLoginModal = true" class="nav-login">Iniciar sesión</button>
      </li>
    </ul>
    <div class="user-section" >
      <div class="search-box" v-if="showSearchBox">
        <input type="text" placeholder="Buscar..." />
      </div>
      <button class="search-icon" @click="showSearchBox = !showSearchBox">
        <i class="fas fa-search"></i>
      </button>
      <img src="/traductor.png" alt="traductor" class="traductor_img" />
      <button v-if="!currentUser" @click="showLoginModal = true" class="desktop-login">Iniciar sesión</button>
    </div>
    <div v-if="currentUser" class="user-menu">
      <button @click="toggleUserMenu">{{ currentUser.username }}</button>
      <div v-if="showUserMenu" class="dropdown-menu">
        <ul>
          <li><a href="#">Carrito</a></li>
          <li><a href="#">Monedero</a></li>
          <li><a href="#">Lista de deseos</a></li>
          <li><a href="#">Mi contenido</a></li>
          <li><a href="#">Mis amigos</a></li>
          <li><a href="#">Mis insignias</a></li>
          <li><a href="#">Configuración</a></li>
          <li><a href="#" @click="logout">Cerrar sesión</a></li>
        </ul>
      </div>
    </div>
    <LoginModal v-if="showLoginModal" @close="closeLoginModal" @switchToRegister="switchToRegister" />
    <RegisterModal v-if="showRegisterModal" @close="closeRegisterModal" @switchToLogin="switchToLogin" />
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink as NuxtLink } from 'vue-router';
import { store, logoutUser } from '../store';

import LoginModal from '~/components/LoginModal.vue';
import RegisterModal from '~/components/RegisterModal.vue';

const showLoginModal = ref(false);
const showRegisterModal = ref(false);
const route = useRoute();
const showSearchBox = ref(false);
const showUserMenu = ref(false);
const menuOpen = ref(false);

const currentUser = computed(() => store.currentUser);

const closeLoginModal = () => {
  showLoginModal.value = false;
};

const closeRegisterModal = () => {
  showRegisterModal.value = false;
};

const switchToRegister = () => {
  showLoginModal.value = false;
  showRegisterModal.value = true;
};

const switchToLogin = () => {
  showRegisterModal.value = false;
  showLoginModal.value = true;
};

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
};

const logout = () => {
  logoutUser();
  showUserMenu.value = false;
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.navbar {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #2b2b2b;
  position: relative;
  z-index: 10;
}
.logo img {
  height: 40px;
  padding-left: 10px;
  padding-right: 100px;
}
.traductor_img {
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
}
ul {
  display: flex;
  padding: 4px;
  list-style: none;
  margin: 0;
}
.nav-links li {
  padding: 4px;
  margin: 0 15px;
}
.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
.nav-links a:hover {
  color: #C714E4;
}
.nav-links a.active {
  position: relative;
  color: #C714E4;
}
.nav-links a.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #C714E4;
}
.user-section {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.nav-links button,
.desktop-login {
  background-color: #2b2b2b;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}
.nav-links button:hover,
.desktop-login:hover {
  background-color: #C714E4;
}
.search-icon {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 18px;
  margin-right: 10px;
}
.search-box {
  display: flex;
  align-items: center;
}
.search-box input {
  padding: 8px;
  border: 1px solid #C714E4;
  border-radius: 5px;
  background-color: transparent;
  color: white;
}
.user-menu {
  position: relative;
}
.user-menu button{
  background-color: #2b2b2b;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}
.user-menu button:hover {
  background-color: #C714E4;
}
.dropdown-menu {
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #2b2b2b;
  border: 1px solid #C714E4;
  border-radius: 5px;
  width: 200px;
  z-index: 20;
  max-height: 1300px;
  overflow-y: auto;
}
.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-direction: column; 
}
.dropdown-menu li {
  padding: 10px;
  border-bottom: 1px solid #C714E4;
}
.dropdown-menu li:last-child {
  border-bottom: none;
}
.dropdown-menu a {
  text-decoration: none;
  color: white;
  display: block;
}
.dropdown-menu a:hover {
  background-color: #C714E4;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

/* Media query para pantallas pequeñas */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
    padding-left: 50px;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px; /* Ajusta según la altura de tu navbar */
    left: 0;
    right: 0;
    background-color: #2b2b2b;
    padding: 10px;
    z-index: 10;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links li {
    margin: 10px 0;
  }

  .user-section {
    display: none;
  }

.user-menu {
  padding-right: 20px;
}

  .search-icon {
    display: block;
  }

  .nav-login {
    background-color: #2b2b2b;
    border: none;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    text-align: left;
    width: 100%;
  }

  .nav-login:hover {
    background-color: #C714E4;
  }

  h1 .text_bienv {
    display: none;
  }
}

@media (min-width: 769px) {
  .mobile-login {
    display: none;
  }

  .desktop-login {
    display: block;
  }
}
</style>
