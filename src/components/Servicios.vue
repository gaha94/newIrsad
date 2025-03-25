<template>
    <section
      id="servicios"
      class="py-5 border-top"
      :class="darkMode ? 'bg-dark text-white' : 'bg-light text-dark'"
    >
      <div class="container">
        <h2 class="fw-bold text-center mb-5" :class="darkMode ? 'text-light' : 'text-danger'">
          Nuestros Servicios
        </h2>
  
        <div class="row row-cols-1 g-4">
          <div
            class="col"
            v-for="(servicio, index) in servicios"
            :key="index"
            data-aos="fade-up"
          >
            <div
              class="card h-100 shadow-sm border-0"
              :class="darkMode ? 'bg-secondary text-white' : ''"
            >
              <div class="card-body d-flex align-items-center">
                <!-- Ícono con fondo circular -->
                <div
                  class="icon-circle me-4 flex-shrink-0"
                  :class="darkMode ? 'bg-white text-danger' : 'bg-danger text-white'"
                >
                  {{ servicio.icono }}
                </div>
  
                <!-- Título + descripción -->
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
      descripcion: 'Contamos con un amplio stock de repuestos originales para camiones, buses y maquinaria pesada.',
      icono: '🛠️',
    },
    {
      titulo: 'Asesoría Técnica',
      descripcion: 'Brindamos asesoría especializada para ayudarte a elegir el producto correcto para tu necesidad.',
      icono: '🧑‍🔧',
    },
    {
      titulo: 'Envíos a Nivel Nacional',
      descripcion: 'Enviamos productos a todo el Perú con rapidez y seguridad.',
      icono: '🚚',
    },
  ]
  </script>

  <style scoped>
  .icon-circle {
    width: 60px;
    height: 60px;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
  </style>
  