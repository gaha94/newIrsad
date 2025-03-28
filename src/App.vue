<script setup>
import { ref, onMounted, watch } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CarruselMarcas from './components/CarruselMarcas.vue'
import UpArrow from './components/UpArrow.vue'
import Hero from './components/Hero.vue'
import Nosotros from './components/Nosotros.vue'
import Contacto from './components/Contacto.vue'
import Testimonios from './components/Testimonios.vue'
import Faqs from './components/Faq.vue'
import Sucursales from './components/Sucursales.vue'
import Servicios from './components/Servicios.vue'
import Contadores from './components/Contadores.vue'
import Factura from './components/Factura.vue'

const darkMode = ref(false)
const isLoading = ref(true)
let AOS = null

onMounted(() => {
  // Restaurar darkMode desde localStorage
  const savedMode = localStorage.getItem('darkMode')
  if (savedMode !== null) {
    darkMode.value = savedMode === 'true'
  }

  const tooltipTriggerList = document.querySelectorAll('[v-tooltip]')
  tooltipTriggerList.forEach(el => {
    new bootstrap.Tooltip(el, {
      title: el.getAttribute('v-tooltip'),
      placement: 'top'
    })
  })

  // Mostrar loader 1s
  setTimeout(() => {
    isLoading.value = false
  }, 1000)

  // Inicializar AOS
  import('aos').then(module => {
    AOS = module.default
    AOS.init({ once: true })
  })

  // WhatsApp Widget
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.src = 'https://static.getbutton.io/widget-send-button/js/init.js'
  script.onload = () => {
    window.WhWidgetSendButton.init('getbutton.io', 'https:', {
      whatsapp: '51947229595',
      call_to_action: '¿Necesitas ayuda?',
      position: 'right',
      pre_filled_message: 'Hola 👋 me gustaría obtener más información sobre sus productos.',
      theme_color: '#25D366'
    })
  }
  document.body.appendChild(script)
})

// 🔁 Refrescar AOS y guardar en localStorage cuando cambia el modo
watch(darkMode, (nuevoValor) => {
  localStorage.setItem('darkMode', nuevoValor)
  setTimeout(() => {
    if (AOS) AOS.refresh()
  }, 100)
})
</script>

<template>
  <div>
    <div v-if="isLoading" class="loader-overlay">
      <div class="spinner"></div>
    </div>

    <div
      v-else
      :class="{ 'bg-dark text-white': darkMode, 'bg-light text-dark': !darkMode }"
    >
      <Navbar :darkMode="darkMode" @toggle-dark-mode="darkMode = !darkMode" />
      <Hero :darkMode="darkMode" />
      <Nosotros :darkMode="darkMode" />
      <Servicios :darkMode="darkMode" />
      <CarruselMarcas :darkMode="darkMode" />
      <Sucursales :darkMode="darkMode" />
      <Factura :darkMode="darkMode" />
      <Contacto :darkMode="darkMode" />
      <Testimonios :darkMode="darkMode" />
      <Contadores :darkMode="darkMode" />
      <Faqs :darkMode="darkMode" />
      <UpArrow />
      <Footer :darkMode="darkMode" />
    </div>
  </div>
</template>


<style>
.loader-overlay {
  position: fixed;
  inset: 0;
  background: #f7f1ee;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.spinner {
  width: 60px;
  height: 60px;
  border: 5px solid #d1191a;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.logo-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  filter: grayscale(100%);
}

.logo-hover:hover {
  transform: scale(1.08);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  filter: grayscale(0%);
}
</style>
