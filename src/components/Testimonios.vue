<template>
    <section id="testimonios" class="py-5 bg-light border-top">
      <div class="container">
        <h2 class="text-danger fw-bold text-center mb-5">Lo que dicen nuestros clientes</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="(testimonio, index) in testimonios" :key="index">
            <div class="p-4 bg-white border rounded shadow-sm h-100">
              <p class="fst-italic">"{{ testimonio.mensaje }}"</p>
              <hr />
              <p class="fw-bold mb-0">{{ testimonio.nombre }}</p>
              <p class="text-muted small">{{ testimonio.empresa }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const testimonios = [
    { nombre: 'María López', empresa: 'Transporte Perú', mensaje: 'Excelente atención y productos de calidad. Recomendados al 100%.' },
    { nombre: 'Carlos Gómez', empresa: 'Logística Andes', mensaje: 'Siempre puntuales y profesionales. ¡Una alianza confiable!' },
    { nombre: 'Ana Rivera', empresa: 'AutoRepuestos SAC', mensaje: 'Su servicio al cliente y soporte es de primera.' },
  ]
  </script>
  