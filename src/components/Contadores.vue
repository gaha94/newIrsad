<template>
    <section
      id="indicadores"
      class="py-5 border-top text-center"
      :class="darkMode ? 'bg-dark text-white' : 'bg-light text-dark'"
    >
      <div class="container">
        <h2 class="fw-bold mb-5" :class="darkMode ? 'text-light' : 'text-danger'">
          Nuestra Trayectoria
        </h2>
  
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col" v-for="(item, index) in contadores" :key="index">
            <ObserveVisibility @change="(visible) => visible && animarContador(index)">
              <div class="counter-box p-4 rounded shadow-sm h-100 text-center">
                <div class="display-5 mb-2">{{ item.icono }}</div>
                <div class="display-4 fw-bold text-danger">+{{ item.visible }}</div>
                <p class="mb-0">{{ item.label }}</p>
              </div>
            </ObserveVisibility>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import { ObserveVisibility } from 'vue-observe-visibility'
  
  defineProps({ darkMode: Boolean })
  
  const contadores = reactive([
    { label: 'Años de experiencia', valor: 10, visible: 0, icono: '📅' },
    { label: 'Clientes satisfechos', valor: 5000, visible: 0, icono: '😊' },
    { label: 'Productos en stock', valor: 200, visible: 0, icono: '📦' },
    { label: 'Sucursales en Perú', valor: 2, visible: 0, icono: '🏬' }
  ])
  
  const animarContador = (i) => {
    console.log(`Contador visible: ${contadores[i].label} (índice: ${i})`)
    if (contadores[i].visible > 0) return
    let start = 0
    const step = Math.ceil(contadores[i].valor / 40)
    const interval = setInterval(() => {
      start += step
      if (start >= contadores[i].valor) {
        contadores[i].visible = contadores[i].valor
        clearInterval(interval)
      } else {
        contadores[i].visible = start
      }
    }, 30)
  }
  </script>
  
  <style scoped>
  .counter-box {
    background: rgba(255, 255, 255, 0.85);
    border: 2px dashed #d1191a;
    transition: transform 0.3s ease;
  }
  .counter-box:hover {
    transform: scale(1.05);
  }
  .bg-dark .counter-box {
    background: rgba(255, 255, 255, 0.05);
    border-color: #f7f1ee;
  }
  </style>
  