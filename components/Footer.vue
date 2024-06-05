<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="item acerca">
        <p class="title">Acerca de</p>
        <p class="normap">Sobre nosotros</p>
        <p class="normap">Trabajos</p>
        <p class="normap">Socios de Steam</p>
        <p class="normap">Publicaciones</p>
      </div>
      <div class="item terser">
        <p class="title">Soporte</p>
        <p class="normap">¿En qué podemos ayudarte?</p>
        <p class="normap">FAQ</p>
        <p class="normap">Información de envío</p>
        <p class="normap">Condiciones</p>
        <p class="normap">Formulario de contacto</p>
        <p class="normap">Política de privacidad</p>
      </div>
      <div class="item politicapri">
        <p class="title">Noticias</p>
        <p class="normap">Novedades</p>
        <p class="normap">Destacados</p>
        <p class="normap">Sorteos</p>
        <p class="normap">Próximos juegos</p>
        <p class="normap">Lanzamientos recientes</p>
      </div>
      <div class="item soporte">
        <p class="title">Distribución</p>
        <p class="normap">Información</p>
        <p class="normap">Normas y directrices</p>
        <p class="normap">Inicia sesión para empezar</p>
      </div>
      <div class="item img-footer">
        <div class="img-container">
          <img src="/imagotipo.png" alt="imagen footer">
        </div>
        <p>© 2023 Steam. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 20px;
  background-color: #2b2b2b;
  text-align: left;
  border-top: 1px solid #444;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  justify-items: start;
}

.item {
  padding: 10px;
}

.item p {
  text-decoration: none;
  color: white;
  margin: 5px 0;
}

.item .title {
  font-weight: bold;
  margin-bottom: 10px; /* Ensure space below the title */
}

.img-container {
  position: relative;
}

.img-container img {
  max-width: 100px;
}

.img-footer p {
  color: white;
  margin-top: 10px;
}

/* Media query para pantallas pequeñas */
@media (max-width: 768px) {
  .img-container img {
    max-width: 50px;
  }
  p.normap {
    display: none;
  }
}
</style>
