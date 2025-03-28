<template>
  <footer
    class="footer pt-5 pb-3 text-white"
    :class="darkMode ? 'bg-dark' : 'footer-light'"
  >
    <div class="container">
      <div class="row">
        <!-- Empresa -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold text-white d-flex align-items-center gap-2">
            <i class="bi bi-truck fs-4"></i> IRSAD
          </h5>
          <p class="small mb-0">
            Comprometidos con ofrecer soluciones modernas, confiables y con impacto.
          </p>
        </div>

        <!-- Enlaces -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">Enlaces</h5>
          <ul class="list-unstyled">
            <li><a href="#inicio" class="footer-link">Inicio</a></li>
            <li><a href="#nosotros" class="footer-link">Nosotros</a></li>
            <li><a href="#servicios" class="footer-link">Servicios</a></li>
            <li><a href="#marcas" class="footer-link">Marcas</a></li>
            <li><a href="#contacto" class="footer-link">Contacto</a></li>
          </ul>
        </div>

        <!-- Redes -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">Síguenos</h5>
          <div class="d-flex gap-3">
            <a href="https://www.facebook.com/irsadperu?locale=es_LA" class="social-icon" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="social-icon" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="social-icon" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="social-icon" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>

      <hr class="border-secondary" />
      <div class="text-center small">
        &copy; {{ year }} IRSAD. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>


<script setup>
defineProps({
  darkMode: Boolean
})

const year = new Date().getFullYear()
</script>

<style scoped>
.footer-light {
  background-color: #5A191F;
}

.footer-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  display: inline-block;
  padding: 4px 0;
  transition: color 0.3s;
}
.footer-link:hover {
  color: #f7f1ee;
  text-decoration: underline;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  font-size: 1.25rem;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  transition: background-color 0.3s, transform 0.3s;
}
.social-icon:hover {
  background-color: #d1191a;
  transform: scale(1.1);
  color: #fff;
}
</style>

