<template>
  <section
    id="testimonios"
    class="py-5 scroll-offset" 
    :class="darkMode ? 'bg-dark text-white' : 'bg-light text-dark'"
  >
    <div class="container">
      <h2 class="fw-bold text-center mb-5" :class="darkMode ? 'text-light' : 'text-danger'">
        Lo que dicen nuestros clientes
      </h2>

      <Swiper
        :modules="[Pagination, Autoplay, Navigation]"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 6000 }"
        :navigation="true"
        :loop="testimonios.length >= 6"
        :breakpoints="{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }"
        class="swiper-testimonios"
      >
        <SwiperSlide v-for="(testimonio, index) in testimonios" :key="index">
          <div
            class="testimonial-box p-4 rounded shadow h-100 mx-3"
            :class="darkMode ? 'bg-secondary text-white' : 'bg-white text-dark'"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div class="d-flex align-items-center mb-2">
              <img
                :src="testimonio.avatar"
                alt="Avatar"
                class="rounded-circle border"
                width="50"
                height="50"
              />
              <div class="ms-3">
                <p class="fw-bold mb-0">{{ testimonio.nombre }}</p>
                <p class="text-muted small mb-0">{{ testimonio.empresa }}</p>
                <!-- ⭐ Estrellas -->
                <div>
                  <i class="bi bi-star-fill text-warning" v-for="n in testimonio.estrellas" :key="n"></i>
                </div>
              </div>
            </div>
            <div class="bubble p-3 mt-2 position-relative">
              <i class="bi bi-chat-left-quote-fill me-2 text-danger"></i>
              "{{ testimonio.mensaje }}"
              <div class="bubble-arrow"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

defineProps({ darkMode: Boolean })

const testimonios = [
  {
    nombre: 'María López',
    empresa: 'Transporte Perú',
    mensaje: 'Excelente atención y productos de calidad. Recomendados al 100%.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    estrellas: 1
  },
  {
    nombre: 'Carlos Gómez',
    empresa: 'Logística Andes',
    mensaje: 'Siempre puntuales y profesionales. ¡Una alianza confiable!',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    estrellas: 4
  },
  {
    nombre: 'Ana Rivera',
    empresa: 'AutoRepuestos SAC',
    mensaje: 'Su servicio al cliente y soporte es de primera.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    estrellas: 5
  }
]
</script>

<style scoped>
.testimonial-box {
  transition: transform 0.3s ease;
  min-height: 280px;
}
.testimonial-box:hover {
  transform: translateY(-5px);
}

.bubble {
  background-color: #f7f1ee;
  border-radius: 1rem;
  position: relative;
}
.bubble-arrow {
  position: absolute;
  bottom: -10px;
  left: 20px;
  width: 0;
  height: 0;
  border-top: 10px solid #f7f1ee;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.bg-dark .bubble {
  background-color: rgba(255, 255, 255, 0.1);
}
.bg-dark .bubble-arrow {
  border-top-color: rgba(255, 255, 255, 0.1);
}

.swiper-button-prev,
.swiper-button-next {
  color: #d1191a;
}
</style>
