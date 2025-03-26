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
      <a class="navbar-brand fw-bold text-danger" href="#heroe">IRSAD</a>

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
          <li class="nav-item d-flex align-items-center ms-3">
            <button class="btn btn-sm rounded-circle border-0" aria-label="Toggle navigation":class="darkMode ? 'bg-warning text-dark' : 'bg-dark text-white'" @click="toggleDarkMode">
              <i :class="darkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
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
  { id: 'heroe', label: 'Heroe' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'marcas', label: 'Marcas' },
  { id: 'sucursales', label: 'Sucursales' },
  { id: 'contacto', label: 'Contacto' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'faq', label: 'FAQ' }
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
  position: relative;
  font-weight: 500;
  transition: color 0.3s;
}
.nav-link:hover {
  color: #d1191a !important;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0%;
  background-color: #d1191a;
  transition: width 0.3s;
}
.nav-link:hover::after {
  width: 100%;
}
.navbar-brand {
  font-size: 1.4rem;
}
.navbar {
  backdrop-filter: blur(8px);
}
.navbar.shadow-sm {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

</style>
