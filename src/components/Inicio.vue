<template>
  <section
    id="inicio"
    class="py-5 border-bottom text-center"
    :class="darkMode ? 'bg-dark text-white' : 'bg-light text-dark'"
  >
    <div class="container">
      <h1 class="fw-bold mb-3" :class="darkMode ? 'text-light' : 'text-danger'">
        ¡Bienvenido a Mi Empresa!
      </h1>
      <p class="lead mb-4">
        Nos especializamos en repuestos automotrices de alta calidad, brindando soluciones confiables para el sector industrial y de transporte en todo el Perú.
      </p>
      <div class="mb-4">
        <i class="bi bi-truck fs-1 text-danger"></i>
      </div>
      <a @click.prevent="scrollTo('nosotros')" class="btn btn-danger btn-lg shadow-sm">
        Conócenos más
      </a>
    </div>
  </section>
</template>

<script setup>
defineProps({ darkMode: Boolean })

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

