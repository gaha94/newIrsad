<template>
  <transition name="fade-zoom">
    <button
      v-if="isVisible"
      class="btn-up-arrow"
      @click="scrollToTop"
      aria-label="Volver arriba"
    >
      <i class="bi bi-chevron-up"></i>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.btn-up-arrow {
  position: fixed;
  bottom: 80px;
  right: 24px; /* A la izquierda del botón de WhatsApp */
  z-index: 2147483647; /* Muy por encima de todo */
  background-color: #d1191a;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 12px 15px;
  font-size: 1.25rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.btn-up-arrow:hover {
  transform: translateY(-4px);
}

/* Animación suave */
.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-zoom-enter-from,
.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.fade-zoom-enter-to,
.fade-zoom-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
