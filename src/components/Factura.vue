<template>
    <section
      id="indicadores"
      class="factura-section d-flex align-items-center scroll-offset"
      :class="darkMode ? 'bg-dark text-white' : 'text-dark'"
    >
      <div class="overlay"></div>
      <div class="container position-relative z-1">
        <div class="row justify-content-center">
          <div class="col-lg-8" data-aos="fade-up">
            <div class="glass-card p-5 rounded shadow text-center">
              <div class="display-4 mb-3">
                📄
              </div>
              <h2 class="fw-bold mb-3 text-danger">Factura Electrónica</h2>
              <p class="lead mb-4">
                Descarga tu factura electrónica de manera rápida y sencilla a través de nuestro sitio web.
              </p>
              <div class="d-flex justify-content-center gap-3 flex-wrap">
                <a
                  href="https://sistematic.pse.pe/buscar"
                  class="btn btn-danger btn-lg fw-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buscar Factura
                </a>
                <a href="#contacto" class="btn btn-outline-light btn-lg fw-bold" @click.prevent="scrollTo('contacto')">
                  ¿Necesitas ayuda?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({ darkMode: Boolean })
  
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  </script>
  
  <style scoped>
  .factura-section {
    position: relative;
    min-height: 80vh;
    background-image: url('/img/backgrounds/portada-factura-electronica.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow: hidden;
    scroll-margin-top: 100px;
  }
  
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
  
  .glass-card {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
  }
  
  .glass-card:hover {
    transform: translateY(-5px);
  }
  
  .bg-dark .glass-card {
    background: rgba(0, 0, 0, 0.4);
    border-color: rgba(209, 25, 26, 0.4);
    color: white;
  }
  
  .bg-dark .btn-outline-light {
    border-color: #f7f1ee;
    color: #f7f1ee;
  }
  
  .bg-dark .btn-outline-light:hover {
    background: #f7f1ee;
    color: #070707;
  }
  </style>
  