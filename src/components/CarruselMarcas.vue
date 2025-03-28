<template>
  <section
    id="marcas"
    class="position-relative scroll-offset d-flex align-items-center py-5"
    :class="[darkMode ? 'bg-dark text-white' : 'bg-textura bg-light text-dark']"
    style="min-height: 35vh; overflow: hidden;"
  >
    <div
      class="background-overlay"
      :class="darkMode ? 'bg-dark-overlay' : 'bg-light-overlay'"
    ></div>

    <div class="container position-relative z-1 text-center">
      <h2 class="text-center fw-bold mb-5 text-shadow"
        :class="darkMode ? 'text-white' : 'text-danger'"
        data-aos="fade-down">
        Marcas que representamos
      </h2>

      <Swiper
        v-if="showSwiper"
        :modules="[Autoplay, Navigation, EffectCoverflow]"
        :loop="true"
        :loopedSlides="marcas.length"
        :grabCursor="true"
        :centeredSlides="true"
        effect="coverflow"
        :coverflowEffect="{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 1.5,
          slideShadows: false
        }"
        :autoplay="{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }"
        :navigation="true"
        :breakpoints="swiperBreakpoints"
        class="swiper-marcas"
      >

        <SwiperSlide
          v-for="(marca, index) in marcas"
          :key="index"
          :aria-label="`Logo de ${marca.nombre}`"
        >
          <div
            :class="[
              'logo-container d-flex align-items-center justify-content-center',
              darkMode ? 'dark-bg' : ''
            ]"
          >
            <img
              :src="`/img/marcas/${marca.archivo}`"
              :alt="`Logo ${marca.nombre}`"
              class="img-fluid logo-hover"
              width="150"
              height="80"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules'

// Estilos Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

defineProps({ darkMode: Boolean })

// 🧩 Lista base de marcas
const baseMarcas = [
  { nombre: 'Automann', archivo: 'automann.png' },
  { nombre: 'DANA', archivo: 'DANA.png' },
  { nombre: 'EATON', archivo: 'EATON.png' },
  { nombre: 'DEVS', archivo: 'DEVS.png' },
  { nombre: 'Fuller', archivo: 'fuller.png' },
  { nombre: 'Meritor', archivo: 'merito.png' },
  { nombre: 'Spicer', archivo: 'SPICER.png' },
  { nombre: 'Kysor', archivo: 'kysor.png' },
  { nombre: 'Fersa', archivo: 'FERSA.png' },
  { nombre: 'FP DIESEL', archivo: 'WhatsApp_Image_2024-10-10_at_13.30.59_84b2629d-removebg-preview.png' }
]

// 🔁 Duplica las marcas para evitar bucles vacíos
const marcas = Array(5).fill(baseMarcas).flat()

// 🎯 Mostrar Swiper solo si hay suficientes marcas
const showSwiper = ref(false)
const shouldLoop = ref(false)

// 📱 Breakpoints responsivos
const swiperBreakpoints = {
  0: { slidesPerView: 2, spaceBetween: 20 },
  768: { slidesPerView: 3, spaceBetween: 30 },
  992: { slidesPerView: 5, spaceBetween: 40 }
}

// 🔍 Detecta cuántos slides se ven según el ancho
const getSlidesPerView = () => {
  const width = window.innerWidth
  if (width >= 992) return 5
  if (width >= 768) return 3
  return 2
}

// ✅ Validar si se puede activar el loop
onMounted(() => {
  const slidesPerView = getSlidesPerView()
  const minRequired = slidesPerView * 2
  showSwiper.value = marcas.length >= slidesPerView
  shouldLoop.value = marcas.length >= minRequired
})
</script>

<style scoped>
.bg-textura {
  background: rgba(247, 241, 238, 0.95) url('/img/bg-textura.png') repeat;
  background-size: cover;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
}

.logo-hover {
  transition: transform 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease;
  filter: grayscale(100%);
  opacity: 0.6;
  cursor: grab;
}
.logo-hover:hover {
  transform: scale(1.1) rotate(1deg);
  filter: grayscale(0%);
  opacity: 1;
}

.swiper-button-prev,
.swiper-button-next {
  color: #d1191a;
}

.logo-container {
  height: 100px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.4); /* Fondo translúcido */
  backdrop-filter: blur(6px); /* Opcional: efecto de desenfoque tipo glass */
  border-radius: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-container:hover {
  background: rgba(255, 255, 255, 0.6); /* Un poco más visible al pasar */
  transform: scale(1.03);
}


.logo-container img {
  max-height: 80px;
  max-width: 100%;
  object-fit: contain;
  text-decoration: none;
  user-select: none;
  background: transparent !important; /* 👈 fuerza transparencia */
  box-shadow: none !important;        /* 👈 remueve sombras accidentales */
  padding: 0 !important;
  margin: 0 auto;
  display: block;
}


.dark-bg {
  background: rgba(255, 255, 255, 0.15); /* Blanco translúcido */
  backdrop-filter: blur(6px);
  border-radius: 12px;
}


h2 {
  font-size: 3rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
}

/* Fondo común para ambas versiones */
.background-overlay {
  background-image: 
    url('/img/backgrounds/red-and-black-abstract-elegant-geometric-background-hd-seenliirgq.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.9;
}

/* 🔆 Capa blanca suave en modo claro */
.bg-light-overlay::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.10); /* Antes 0.85 → más transparente */
  z-index: 1;
}


/* 🌑 Capa oscura suave en modo dark */
.bg-dark-overlay::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4); /* Ya lo tenías así */
  z-index: 1;
}

</style>
