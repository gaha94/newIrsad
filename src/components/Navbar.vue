<template>
  <nav
    class="navbar navbar-expand-lg fixed-top shadow-sm transition"
    :class="[
      isScrolled ? (darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white') : 'bg-transparent',
      darkMode && !isScrolled ? 'navbar-dark' : ''
    ]"
  >
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand fw-bold text-danger" href="#inicio">IRSAD</a>

      <!-- Botón hamburguesa -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menú -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-for="item in items" :key="item.id" class="nav-item">
            <a
              class="nav-link"
              :class="{ 'text-white': darkMode && !isScrolled }"
              :href="`#${item.id}`"
              @click.prevent="scrollToSection(item.id)"
            >
              {{ item.label }}
            </a>
          </li>
          <!-- Dark Mode Toggle -->
          <li class="nav-item ms-3">
            <button class="btn btn-outline-danger btn-sm" @click="toggleDarkMode">
              {{ darkMode ? '☀️' : '🌙' }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

// Props
const props = defineProps({ darkMode: Boolean })
const emit = defineEmits(['toggle-dark-mode'])

const items = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'marcas', label: 'Marcas' },
  { id: 'sucursales', label: 'Sucursales' },
  { id: 'contacto', label: 'Contacto' }
]

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

const toggleDarkMode = () => {
  emit('toggle-dark-mode')
}

// Scroll suave
const scrollToSection = (id) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.transition {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
.nav-link {
  font-weight: 500;
  transition: color 0.3s;
}
.nav-link:hover {
  color: #d1191a !important;
}
.navbar-brand {
  font-size: 1.4rem;
}
</style>
