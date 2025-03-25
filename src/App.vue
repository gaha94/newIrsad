<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CarruselMarcas from './components/CarruselMarcas.vue'
import UpArrow from './components/UpArrow.vue'
import Hero from './components/Hero.vue'
import Inicio from './components/Inicio.vue'
import Nosotros from './components/Nosotros.vue'
import Contacto from './components/Contacto.vue'
import Testimonios from './components/Testimonios.vue'
import Faqs from './components/Faq.vue'
import Sucursales from './components/Sucursales.vue'
import Servicios from './components/Servicios.vue'
import Contadores from './components/Contadores.vue'


const darkMode = ref(false)
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000) // duración del loader
})

onMounted(() => {
  // AOS
  import('aos').then(AOS => AOS.init({ once: true }))

  // WhatsApp Chat Widget (✅ funciona correctamente)
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.src = 'https://static.getbutton.io/widget-send-button/js/init.js'
  script.onload = () => {
    window.WhWidgetSendButton.init('getbutton.io', 'https:', {
      whatsapp: '+51999333666',
      call_to_action: '¿Necesitas ayuda?',
      position: 'right',
      pre_filled_message: 'Hola 👋 me gustaría obtener más información sobre sus productos.',
      theme_color: '#25D366'
    })
  }
  document.body.appendChild(script)
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
      <Inicio />
      <Nosotros :darkMode="darkMode" />
      <servicios :dark-mode="darkMode" />
      <CarruselMarcas />
      <sucursales :dark-mode="darkMode" />
      <Contacto :darkMode="darkMode" />
      <testimonios />
      <Contadores :darkMode="darkMode" />
      <faqs />
      <UpArrow />
      <Footer />
      <WhatsAppButton />
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
