<template>
    <section id="nosotros" class="py-5" :class="darkMode ? 'bg-dark text-white' : 'bg-light text-dark'" data-aos="fade-up">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Imagen de la empresa"
              class="img-fluid rounded shadow"
            />
          </div>
          <div class="col-md-6">
            <h2 class="text-danger fw-bold mb-3">Sobre Nosotros</h2>
            <p>
              Somos una empresa comprometida con la excelencia, enfocada en ofrecer productos y servicios de calidad.
            </p>
            <p class="mb-0">
              Nuestra misión es construir relaciones sólidas basadas en confianza, compromiso y resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({ darkMode: Boolean })
  </script>
  