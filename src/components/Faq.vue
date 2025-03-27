<template>
  <section
    id="faq"
    class="py-5 scroll-offset position-relative text-white"
  >
    <!-- Fondo con imagen y overlay (modo claro y oscuro) -->
    <div class="faq-background"></div>

    <div class="container position-relative z-1">
      <h2 class="fw-bold text-center mb-5 text-light">
        Preguntas Frecuentes
      </h2>

      <div class="accordion" id="faqAccordion">
        <div
  class="accordion-item glass-card position-relative"
  v-for="(faq, index) in faqs"
  :key="index"
  data-aos="fade-up"
>
  <h2 class="accordion-header" :id="`heading${index}`">
    <button
      class="accordion-button collapsed justify-content-between"
      type="button"
      data-bs-toggle="collapse"
      :data-bs-target="`#collapse${index}`"
      :aria-expanded="false"
      :aria-controls="`collapse${index}`"
    >
      <span class="d-flex align-items-center">
        <i class="bi bi-question-circle me-2 text-danger"></i>
        {{ faq.pregunta }}
      </span>
    </button>
  </h2>
  <div
    :id="`collapse${index}`"
    class="accordion-collapse collapse"
    :aria-labelledby="`heading${index}`"
    data-bs-parent="#faqAccordion"
  >
    <div class="accordion-body">
      {{ faq.respuesta }}
    </div>
  </div>
</div>

      </div>

      <!-- Bloque final -->
      <div class="mt-5 text-center" data-aos="fade-up">
        <h4 class="fw-bold mb-3" :class="darkMode ? 'text-light' : 'text-dark'">
          ¿Tienes más dudas?
        </h4>
        <p class="mb-4">Nuestro equipo está listo para ayudarte en lo que necesites.</p>
        <a href="#contacto" class="btn btn-danger">
          Escríbenos
          <i class="bi bi-envelope-fill ms-2"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
defineProps({ darkMode: Boolean })

const faqs = reactive([
  {
    pregunta: '¿Dónde están ubicados?',
    respuesta: 'Nos encontramos en Lima Metropolitana, Perú.',
    abierto: false
  },
  {
    pregunta: '¿Ofrecen atención personalizada?',
    respuesta: 'Sí, cada cliente cuenta con un asesor dedicado.',
    abierto: false
  },
  {
    pregunta: '¿Tienen garantía sus productos?',
    respuesta: 'Sí, trabajamos con marcas que ofrecen garantía oficial.',
    abierto: false
  }
])

const toggle = (index) => {
  faqs.forEach((item, i) => {
    item.abierto = i === index ? !item.abierto : false
  })
}
</script>

<style scoped>
/* Fondo con overlay */
.faq-background {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.6),  /* Overlay más oscuro */
      rgba(0, 0, 0, 0.6)
    ),
    url('/img/backgrounds/how-to-unsend-emails.BpdHoz1C_2ugpO4.png');
  background-size: cover;
  background-position: center;
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 1;
}


.faq-dark-overlay {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('/public');
  opacity: 1;
}

.faq-light-overlay {
  opacity: 0.7;
}

.transition {
  transition: transform 0.3s ease;
}
.rotate {
  transform: rotate(180deg);
}

.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 1rem;
  overflow: hidden;
  color: white;
}

/* Accordion button ajustes para contraste */
.accordion-button {
  background-color: transparent;
  color: inherit;
  font-weight: 500;
}
.accordion-button:not(.collapsed) {
  background-color: rgba(255, 255, 255, 0.05);
  color: #fff;
}
.accordion-body {
  color: #f1f1f1;
}
</style>
