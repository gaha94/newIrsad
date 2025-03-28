<template>
  <section
    id="nosotros"
    class="position-relative scroll-offset d-flex align-items-center"
    :class="darkMode ? 'text-white bg-dark' : 'text-dark'"
    style="min-height: 100vh; overflow: hidden;"
  >
    <!-- Fondo Parallax -->
    <div
      class="background-parallax"
      :class="darkMode ? 'bg-dark-overlay' : 'bg-light-overlay'"
    ></div>

    <!-- Contenido con efecto de movimiento suave -->
    <div
      class="container position-relative py-5 parallax-content"
      :style="{ transform: `translateY(${scrollOffset}px)` }"
    >
      <div class="row align-items-center mb-5">
        <div class="col-md-6 mb-4 mb-md-0">
          <img
            src="/img/logo/13ae86a0-a6f5-46b0-a598-60ac15f65007.svg"
            alt="Imagen de la empresa"
            class="img-fluid rounded shadow"
          />
        </div>
        <div class="col-md-6">
          <h2 class="text-danger fw-bold mb-5 text-shadow"
          :class="darkMode ? 'text-white' : 'text-danger'"
          >Sobre Nosotros</h2>
          <p>
            Somos una empresa comprometida con la excelencia, enfocada en ofrecer productos y servicios de calidad.
          </p>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          class="col"
          v-for="(item, index) in datos"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="h-100 p-4 rounded border-start border-5 border-danger shadow-sm glass-card">
            <h5 class="fw-bold text-danger mb-2">{{ item.titulo }}</h5>
            <p class="mb-0">{{ item.texto }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
defineProps({ darkMode: Boolean })

const datos = [
  {
    titulo: 'Misión',
    texto: 'Ofrecer soluciones innovadoras en repuestos, garantizando calidad, compromiso y servicio personalizado.',
  },
  {
    titulo: 'Visión',
    texto: 'Ser líderes en el rubro automotriz y logístico en el Perú, reconocidos por nuestra confianza y excelencia.',
  },
  {
    titulo: 'Metas',
    texto: 'Expandirnos a más regiones, fortalecer relaciones con marcas líderes y mejorar continuamente nuestra atención.',
  },
]

// Efecto parallax en contenido
const scrollOffset = ref(0)
const handleScroll = () => {
  const scrollY = window.scrollY || window.pageYOffset
  scrollOffset.value = scrollY * -0.1 // más suave
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Fondo Parallax */
.background-parallax {
  position: absolute;
  inset: 0;
  background-image: url('/img/landing/CUMMINS.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  z-index: 0;
}

/* Gradientes más suaves */
.bg-dark-overlay {
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url('/img/landing/CUMMINS.jpg');
}

.bg-light-overlay {
  background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
    url('/img/landing/CUMMINS.jpg');
}

/* Cartas */
.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}
.glass-card:hover {
  transform: translateY(-5px);
}
.bg-dark .glass-card {
  background: rgba(255, 255, 255, 0.07);
  border-color: #d1191a;
}

/* Movimiento suave del contenido */
.parallax-content {
  transition: transform 0.2s ease-out;
}

h2 {
  font-size: 3rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
}
</style>
