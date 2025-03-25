<template>
    <footer class="bg-dark text-white pt-5 pb-3 mt-5">
      <div class="container">
        <div class="row">
          <!-- Nombre empresa -->
          <div class="col-md-4 mb-4">
            <h5 class="text-danger fw-bold">Mi Empresa</h5>
            <p>Comprometidos con ofrecer soluciones modernas, confiables y con impacto.</p>
          </div>
  
          <!-- Enlaces -->
          <div class="col-md-4 mb-4">
            <h5 class="fw-bold">Enlaces</h5>
            <ul class="list-unstyled">
              <li><a href="#inicio" class="text-white text-decoration-none">Inicio</a></li>
              <li><a href="#nosotros" class="text-white text-decoration-none">Nosotros</a></li>
              <li><a href="#marcas" class="text-white text-decoration-none">Marcas</a></li>
              <li><a href="#contacto" class="text-white text-decoration-none">Contacto</a></li>
            </ul>
          </div>
  
          <!-- Redes -->
          <div class="col-md-4 mb-4">
            <h5 class="fw-bold">Síguenos</h5>
            <div class="d-flex gap-3 fs-4">
              <a href="#" class="text-white" aria-label="Facebook">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="text-white" aria-label="Instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="text-white" aria-label="LinkedIn">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="#" class="text-white" aria-label="YouTube">
                <i class="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
  
        <hr class="border-secondary" />
        <div class="text-center small">
          &copy; {{ year }} Mi Empresa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  const year = new Date().getFullYear()
  </script>
  