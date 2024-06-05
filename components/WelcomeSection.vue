<!-- components/WelcomeSection.vue -->
  <template>
    <section class="welcome-section">
      <h2>Bienvenid@ a la Comunidad de Steam</h2>
      <div class="promo-images">
        <img src="'/promo01.png'" alt="Promo 1" />
        <img src="'/promo02.png'" alt="Promo 2" />
      </div>
    </section>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .welcome-section {
    padding: 20px;
    text-align: center;
    background-color: #1b2838;
  }
  
  .welcome-section .promo-images {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .welcome-section .promo-images img {
    height: 150px;
    width: auto;
  }
  </style>