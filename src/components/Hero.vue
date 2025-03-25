<template>
    <section
      id="hero"
      class="d-flex align-items-center text-center text-white"
      :class="darkMode ? 'bg-dark' : 'bg-danger'"
      style="min-height: 90vh; background-image: url('/public/img/backgrounds/daa9991d-84c2-469c-960c-ad50a864e2cc.jepg.jpg'); background-size: cover; background-position: center;"
      data-aos="zoom-in"
    >
      <div class="container py-5" style="backdrop-filter: brightness(0.6);">
        <h1 class="display-4 fw-bold">Bienvenido a <span class="text-warning">Mi Empresa</span></h1>
        <p class="lead my-4">
          Ofrecemos soluciones modernas, confiables y con impacto.
        </p>
        <a href="#contacto" class="btn btn-light btn-lg fw-bold">Contáctanos</a>
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({ darkMode: Boolean })
  </script>
  