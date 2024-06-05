<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <button class="close-button" @click="closeModal">✕</button>
      <h2>Registrarse</h2>
      <form @submit.prevent="register">
        <div class="input-container">
          <input type="text" id="username" v-model="username" required placeholder="Crea un nombre de usuario" />
        </div>
        <div class="input-container">
          <input type="email" id="email" v-model="email" required placeholder="Dirección de correo" />
        </div>
        <div class="input-container">
          <input type="password" id="password" v-model="password" required placeholder="Contraseña" />
        </div>
        <div class="input-container">
          <input type="password" id="confirmPassword" v-model="confirmPassword" required placeholder="Repetir contraseña" />
        </div>
        <div class="input-container">
          <input class="aceptar" type="checkbox" id="terms" v-model="terms" required />
          <label for="terms">Acepto términos y condiciones</label>
        </div>
        <button type="submit" class="submit-button">Registrarse</button>
        <p class="register-text">
          ¿Ya tienes cuenta de Steam? <a @click.prevent="switchToLogin" class="register-link">Inicia sesión aquí.</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { addUser } from '../store';

const emit = defineEmits(['close', 'switchToLogin']);

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const terms = ref(false);

const closeModal = () => {
  emit('close');
};

const switchToLogin = () => {
  emit('switchToLogin');
};

const register = () => {
  if (password.value !== confirmPassword.value) {
    alert('Las contraseñas no coinciden');
    return;
  }
  if (process.client) {
    const user = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    addUser(user);
    closeModal();
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
  
  .input-container input,
  .input-container label {
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
  
  .aceptar{
    margin-bottom: 20px;
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
  width: 300px;
  position: relative;
  text-align: center;
}

.input-container {
  margin-bottom: 20px;
  margin-right: 30px;
}
}
  </style>
   








<!-- <template>
    <div class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <button class="close-button" @click="closeModal">✕</button>
        <h2>Registrarse</h2>
        <form @submit.prevent="register">
          <div class="input-container">
            <input type="text" id="username" v-model="username" required placeholder="Crea un nombre de usuario" />
          </div>
          <div class="input-container">
            <input type="email" id="email" v-model="email" required placeholder="Dirección de correo" />
          </div>
          <div class="input-container">
            <input type="password" id="password" v-model="password" required placeholder="Contraseña" />
          </div>
          <div class="input-container">
            <input type="password" id="confirmPassword" v-model="confirmPassword" required placeholder="Repetir contraseña" />
          </div>
          <div class="input-container">
            <input class="aceptar" type="checkbox" id="terms" v-model="terms" required />
            <label for="terms">Acepto términos y condiciones</label>
          </div>
          <button type="submit" class="submit-button">Registrarse</button>
          <p class="register-text">
            ¿Ya tienes cuenta de Steam? <a @click.prevent="switchToLogin" class="register-link">Inicia sesión aquí.</a>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const emit = defineEmits(['close', 'switchToLogin']);
  
  const username = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const terms = ref(false);
  
  const closeModal = () => {
    emit('close');
  };
  
  const switchToLogin = () => {
    emit('switchToLogin');
  };
  
  const register = () => {
    if (password.value !== confirmPassword.value) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log(`Usuario: ${username.value}, Email: ${email.value}, Contraseña: ${password.value}`);
    closeModal();
  };
  </script>
  
  <style scoped>
  /* Tu CSS aquí (similar al del login) */
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
  
  .input-container input,
  .input-container label {
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
  
  .aceptar{
    margin-bottom: 20px;
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
  </style>
   -->