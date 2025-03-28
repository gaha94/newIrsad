<template>
  <section
    id="servicios"
    class="position-relative scroll-offset d-flex align-items-center"
    :class="darkMode ? 'text-white bg-dark' : 'text-dark'"
    style="min-height: 100vh; overflow: hidden;"
  >
    <!-- Fondo con parallax -->
    <div
      class="background-overlay"
      :class="darkMode ? 'bg-dark-overlay' : 'bg-light-overlay'"
    ></div>

    <div class="container position-relative z-1">
      <h2
        class="text-center fw-bold mb-5 text-shadow"
        :class="darkMode ? 'text-light' : 'text-danger'"
        data-aos="fade-up"
      >
        Nuestros Servicios
      </h2>

      <div class="row row-cols-1 g-4">
        <div
          class="col"
          v-for="(servicio, index) in servicios"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="card h-100 shadow-sm border-0 glass-card">
            <div class="card-body d-flex align-items-start">
              <div
                class="icon-circle me-4 flex-shrink-0"
                :class="darkMode ? 'bg-icon-dark' : 'bg-danger text-white'"
              >
                {{ servicio.icono }}
              </div>
              <div>
                <h5 class="fw-bold mb-2">{{ servicio.titulo }}</h5>
                <p class="mb-0">{{ servicio.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ darkMode: Boolean })

const servicios = [
  {
    titulo: 'Repuestos Originales',
    descripcion:
      'Contamos con un amplio stock de repuestos originales para camiones, buses y maquinaria pesada.',
    icono: '🛠️',
  },
  {
    titulo: 'Asesoría Técnica',
    descripcion:
      'Brindamos asesoría especializada para ayudarte a elegir el producto correcto para tu necesidad.',
    icono: '🧑‍🔧',
  },
  {
    titulo: 'Envíos a Nivel Nacional',
    descripcion:
      'Enviamos productos a todo el Perú con rapidez y seguridad.',
    icono: '🚚',
  },
]
</script>

<style scoped>
.card-body {
  padding: 2rem;
  font-size: 1.1rem;
}

/* Glassmorphism */
.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
  border-radius: 12px;
  border: 1px solid transparent;
  min-height: 140px;
}
.glass-card:hover {
  transform: translateY(-5px);
}
.bg-dark .glass-card {
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(209, 25, 26, 0.5);
  color: white;
}

/* Ícono circular */
.icon-circle {
  width: 70px;
  height: 70px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.bg-dark .icon-circle {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

/* Fondo con efecto parallax */
.background-overlay {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url('/img/backgrounds/Llantas.webp');
  background-size: cover;
  background-attachment: fixed; /* Efecto parallax */
  background-position: center;
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 1;
}
.bg-dark-overlay {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('/img/backgrounds/Llantas.webp');
}
.bg-light-overlay {
  opacity: 0.65;
}

/* Eliminamos márgenes innecesarios */
.row > .col {
  margin-bottom: 0 !important;
}
#servicios .container {
  padding-bottom: 0 !important;
}

h2 {
  font-size: 3rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
}
</style>
