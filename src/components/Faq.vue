<template>
    <section id="faq" class="py-5 border-top">
      <div class="container">
        <h2 class="text-danger fw-bold text-center mb-5">Preguntas Frecuentes</h2>
        <div class="accordion" id="faqAccordion">
          <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
            <h2 class="accordion-header" :id="`heading${index}`">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`">
                {{ faq.pregunta }}
              </button>
            </h2>
            <div :id="`collapse${index}`" class="accordion-collapse collapse" :aria-labelledby="`heading${index}`" data-bs-parent="#faqAccordion">
              <div class="accordion-body">{{ faq.respuesta }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const faqs = [
    { pregunta: '¿Dónde están ubicados?', respuesta: 'Nos encontramos en Lima Metropolitana, Perú.' },
    { pregunta: '¿Ofrecen atención personalizada?', respuesta: 'Sí, cada cliente cuenta con un asesor dedicado.' },
    { pregunta: '¿Tienen garantía sus productos?', respuesta: 'Sí, trabajamos con marcas que ofrecen garantía oficial.' },
  ]
  </script>
  