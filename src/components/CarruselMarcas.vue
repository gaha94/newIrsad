<template>
<section 
  id="marcas" 
  class="scroll-offset py-5" :class="[
  darkMode ? 'bg-dark text-white' : 'bg-textura bg-light text-dark'
]">

    <div class="container text-center">
      <h2 :class="darkMode ? 'text-light' : 'text-danger'" class="fw-bold mb-4">
        Nuestras Marcas
      </h2>

      <Swiper
        v-if="showSwiper"
        :modules="[Autoplay, Navigation]"
        :loop="true"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :navigation="true"
        :breakpoints="{
          0: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          992: { slidesPerView: 5, spaceBetween: 40 }
        }"
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
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

defineProps({ darkMode: Boolean })

const marcas = [
  { nombre: 'Automann', archivo: 'automann.png' },
  { nombre: 'DANA', archivo: 'DANA.png' },
  { nombre: 'EATON', archivo: 'EATON.png' },
  { nombre: 'DEVS', archivo: 'DEVS.png' },
  { nombre: 'Fuller', archivo: 'fuller.png' },
  { nombre: 'Meritor', archivo: 'merito.png' },
  { nombre: 'Spicer', archivo: 'SPICER.png' },
  { nombre: 'Kysor', archivo: 'kysor.png' },
  { nombre: 'Fersa', archivo: 'FERSA.png' },
  { nombre: 'FP_DIESEL', archivo: 'WhatsApp_Image_2024-10-10_at_13.30.59_84b2629d-removebg-preview.png' },
  { nombre: 'Automann', archivo: 'automann.png' },
  { nombre: 'DANA', archivo: 'DANA.png' },
  { nombre: 'EATON', archivo: 'EATON.png' },
  { nombre: 'DEVS', archivo: 'DEVS.png' },
  { nombre: 'Fuller', archivo: 'fuller.png' },
  { nombre: 'Meritor', archivo: 'merito.png' },
  { nombre: 'Spicer', archivo: 'SPICER.png' },
  { nombre: 'Kysor', archivo: 'kysor.png' },
  { nombre: 'Fersa', archivo: 'FERSA.png' },
  { nombre: 'FP_DIESEL', archivo: 'WhatsApp_Image_2024-10-10_at_13.30.59_84b2629d-removebg-preview.png' }
]

const showSwiper = ref(false)

onMounted(() => {
  if (marcas.length >= 6) {
    showSwiper.value = true
  }
})
</script>


<style scoped>
/* 👇 Clase usada solo si darkMode está apagado */
.bg-textura {
  background: rgba(247, 241, 238, 0.95) url('/img/bg-textura.png') repeat;
  background-size: cover;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
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

.swiper-button-prev,
.swiper-button-next {
  color: #d1191a;
}

.logo-container {
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-container img {
  max-height: 80px;
  max-width: 100%;
  object-fit: contain;
  text-decoration: none;
  user-select: none;

}

.dark-bg {
  background-color: white;
  border-radius: 8px;
}


</style>
