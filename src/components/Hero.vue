<template>
  <section
    id="hero"
    class="hero-section d-flex align-items-center text-center text-white position-relative"
    :class="darkMode ? 'bg-dark' : ''"
    data-aos="zoom-in"
  >
    <!-- Fondo oscurecido -->
    <div class="hero-overlay"></div>

    <div class="container position-relative z-1 py-5">
      <h1 class="display-4 fw-bold hero-title">
        Bienvenido a <span class="text-danger">Irsad Peru</span>
      </h1>
      <p class="lead my-4 hero-text">
        Ofrecemos soluciones modernas, confiables y con impacto.
      </p>
      <a href="#contacto" class="btn btn-light btn-lg fw-bold shadow">Contáctanos</a>

      <!-- Flechita scroll abajo -->
      <div class="scroll-down mt-5">
        <i class="bi bi-chevron-double-down fs-2 text-white bounce"></i>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ darkMode: Boolean })
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background-image: url('/img/backgrounds/main.png');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
  z-index: 0;
}

.hero-title,
.hero-text {
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.8);
}

.scroll-down {
  animation: fadeIn 2s ease-in-out infinite alternate;
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
</style>
