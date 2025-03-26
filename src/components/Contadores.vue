<template>
  <section
    id="indicadores"
    class="py-5 text-center"
    :class="darkMode ? 'bg-dark text-white' : 'bg-light text-dark'"
  >
    <div class="container">
      <h2 class="fw-bold mb-5" :class="darkMode ? 'text-light' : 'text-danger'">
        Nuestra Trayectoria
      </h2>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div
          class="col"
          v-for="(item, index) in contadores"
          :key="index"
          :ref="el => contadoresRefs[index] = el"
        >
          <div class="counter-box p-4 rounded shadow-sm h-100 text-center">
            <div class="display-5 mb-2">{{ item.icono }}</div>
            <div class="display-4 fw-bold text-danger">+{{ item.visible }}</div>
            <p class="mb-0">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
defineProps({ darkMode: Boolean })

const contadores = reactive([
  { label: 'Años de experiencia', valor: 10, visible: 0, icono: '📅' },
  { label: 'Clientes satisfechos', valor: 5000, visible: 0, icono: '😊' },
  { label: 'Productos en stock', valor: 200, visible: 0, icono: '📦' },
  { label: 'Sucursales en Perú', valor: 2, visible: 0, icono: '🏬' }
])

const contadoresRefs = []

const animarContador = (i) => {
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

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = contadoresRefs.findIndex(el => el === entry.target)
          if (index !== -1) {
            animarContador(index)
            observer.unobserve(entry.target)
          }
        }
      })
    },
    {
      threshold: 0.6, // activa cuando el 60% del elemento está visible
    }
  )

  contadoresRefs.forEach((el) => {
    if (el) observer.observe(el)
  })
})
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
