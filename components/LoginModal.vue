<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <button class="close-button" @click="closeModal">✕</button>
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="login">
        <div class="input-container">
          <input type="text" id="username" v-model="username" required placeholder="Usuario o correo" />
        </div>
        <div class="input-container">
          <input type="password" id="password" v-model="password" required placeholder="Contraseña" />
        </div>
        <button type="submit" class="submit-button">Iniciar sesión</button>
        <p class="register-text">
          ¿Todavía no tienes cuenta de Steam? <a @click.prevent="switchToRegister" class="register-link">Regístrate aquí.</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { loginUser } from '../store';

const emit = defineEmits(['close', 'switchToRegister']);

const username = ref('');
const password = ref('');

const closeModal = () => {
  emit('close');
};

const switchToRegister = () => {
  emit('switchToRegister');
};

const login = () => {
  if (process.client) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => (user.username === username.value || user.email === username.value) && user.password === password.value);

    if (user) {
      loginUser(user);
      alert('Login exitoso');
      closeModal();
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
};
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

}

.modal {
  background: #e5e5e5;
  padding: 40px;
  border-radius: 20px;
  width: 400px;
  position: relative;
  text-align: center;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #C714E4;
}

.modal h2 {
  margin: 0;
  color: #C714E4;
}

.form {
  display: flex;
  flex-direction: column;
}

.input-container {
  margin-bottom: 20px;
}

.input-container input {
  width: 100%;
  padding: 15px;
  border-radius: 30px;
  border: none;
  background: #d8d8d8;
  font-size: 16px;
  color: #333;
  text-align: center;
}

.submit-button {
  padding: 15px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background: #C714E4;
  color: white;
  font-size: 16px;
  width: 100%;
  margin-top: 20px;
}

.register-text {
  margin-top: 20px;
  color: #333;
  font-size: 14px;
}

.register-link {
  color: #C714E4;
  text-decoration: none;
  font-weight: bold;
}

.register-link:hover {
  color: #007bff;
}
@media (max-width: 658px) {
.modal {
  background: #e5e5e5;
  padding: 40px;
  border-radius: 20px;
  width: 200px;
  position: relative;
  text-align: center;
}

.input-container {
  margin-bottom: 20px;
  margin-right: 30px;
}
}
</style>
