<template>
  <section 
    id="marcas" 
    class="py-5 border-top"
    style="background: rgba(247, 241, 238, 0.95) url('/img/bg-textura.png') repeat; background-size: cover;"
  >
    <div class="container text-center">
      <h2 class="text-danger fw-bold mb-4">Nuestras Marcas</h2>

      <Swiper
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
        <SwiperSlide v-for="(marca, index) in marcas" :key="index" :aria-label="`Logo de ${marca.nombre}`">
          <div class="logo-container d-flex align-items-center justify-content-center">
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const marcas = [
  { nombre: 'Automann', archivo: 'automann.png' },
  { nombre: 'DANA', archivo: 'DANA.png' },
  { nombre: 'EATON', archivo: 'EATON.png' },
  { nombre: 'DEVS', archivo: 'DEVS.png' },
  { nombre: 'Fuller', archivo: 'fuller.png' },
  { nombre: 'Meritor', archivo: 'merito.png' }, // ✅ corregido
  { nombre: 'Spicer', archivo: 'SPICER.png' },
  { nombre: 'PAI', archivo: 'PAI.png' },
]
</script>

<style>
.logo-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  filter: grayscale(100%);
}

.logo-hover:hover {
  transform: scale(1.08);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  filter: grayscale(0%);
}

/* Botones del carrusel */
.swiper-button-prev,
.swiper-button-next {
  color: #d1191a;
}

/* Contenedor fijo para alinear logos */
.logo-container {
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Imagen dentro del slide */
.logo-container img {
  max-height: 80px;
  max-width: 100%;
  object-fit: contain;
}

/* Sombra superior sutil para separar visualmente */
#marcas {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
}
</style>
