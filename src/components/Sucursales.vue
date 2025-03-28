<template>
    <section
      id="sucursales"
      class="sucursales_section py-5 scroll-offset"
      :class="darkMode ? 'bg-dark text-white' : 'bg-light text-dark'"
    >
    <div 
      class="overlay"
      :style="darkMode 
        ? 'background: rgba(0, 0, 0, 0.5)' 
        : 'background: rgba(255, 255, 255, 0.7)'"
    ></div>

      <div class="container z-3 position-relative">
        <h2 class="text-center fw-bold mb-5 text-shadow"
          :class="darkMode ? 'text-white' : 'text-danger'"
        >
          Nuestros Locales
        </h2>
  
        <div class="row g-4">
          <div
            class="col-12 col-md-6"
            v-for="(local, index) in locales"
            :key="index"
            data-aos="fade-up"
          >
          <div
            class="card h-100 glass-card shadow-sm border-0"
          >
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title fw-bold d-flex align-items-center justify-content-between">
                  <span :class="darkMode ? 'text-warning' : 'text-danger'">
                    {{ local.nombre }}
                  </span>
                  <span v-if="local.nuevo" class="badge bg-danger ms-2">NUEVO</span>
                </h5>
                <p class="d-flex align-items-center mb-1">
                  <i
                    class="bi me-2"
                    :class="calcularEstadoConDetalle(local.horarioAtencion).abierto ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-danger'"
                    :title="calcularEstadoConDetalle(local.horarioAtencion).detalle"
                    data-bs-toggle="tooltip"
                  ></i>
                  <span
                    :class="calcularEstadoConDetalle(local.horarioAtencion).abierto ? 'text-success' : 'text-danger'"
                  >
                    {{ calcularEstadoConDetalle(local.horarioAtencion).abierto ? 'Abierto ahora' : 'Cerrado' }}
                  </span>
                </p>
                <p class="d-flex align-items-center mb-1"><i class="bi bi-geo-alt me-2 text-danger"></i> {{ local.direccion }}</p>
                <p class="d-flex align-items-center mb-1"><i class="bi bi-telephone me-2 text-danger"></i> {{ local.telefono }}</p>
                <p v-if="local.email" class="d-flex align-items-center mb-1"><i class="bi bi-envelope me-2 text-danger"></i> {{ local.email }}</p>
                <p class="d-flex align-items-start mb-3">
                  <i class="bi bi-clock me-2 text-danger"></i>
                  <span><strong>Horario:</strong><br><span v-html="local.horario"></span></span>
                </p>
              </div>

              <div class="ratio ratio-16x9 rounded overflow-hidden">
                <iframe
                  :src="local.mapa"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
    </section>
</template>
<script setup>

  import { onMounted } from 'vue'

  onMounted(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    tooltipTriggerList.forEach(el => {
      new bootstrap.Tooltip(el)
    })
  })


  defineProps({
  darkMode: Boolean
  })


  const calcularEstadoConDetalle = (horario) => {
    const ahora = new Date()
    const dia = ahora.getDay()
    const horaActual = ahora.getHours()
    const minutosActual = ahora.getMinutes()

    let desde, hasta

    if (dia >= 1 && dia <= 5 && horario.lunesViernes) {
      desde = horario.lunesViernes.desde
      hasta = horario.lunesViernes.hasta
    } else if (dia === 6 && horario.sabado) {
      desde = horario.sabado.desde
      hasta = horario.sabado.hasta
    } else {
      return { abierto: false, detalle: 'Cerrado por hoy' }
    }

    const [hDesde, mDesde] = desde.split(':').map(Number)
    const [hHasta, mHasta] = hasta.split(':').map(Number)

    const minutosAhora = horaActual * 60 + minutosActual
    const minutosDesde = hDesde * 60 + mDesde
    const minutosHasta = hHasta * 60 + mHasta

    if (minutosAhora >= minutosDesde && minutosAhora <= minutosHasta) {
      const minutosRestantes = minutosHasta - minutosAhora
      const h = Math.floor(minutosRestantes / 60)
      const m = minutosRestantes % 60
      return { abierto: true, detalle: `Cierra en ${h}h ${m}min` }
    } else if (minutosAhora < minutosDesde) {
      const minutosFaltan = minutosDesde - minutosAhora
      const h = Math.floor(minutosFaltan / 60)
      const m = minutosFaltan % 60
      return { abierto: false, detalle: `Abre en ${h}h ${m}min` }
    } else {
      return { abierto: false, detalle: 'Cerrado por hoy' }
    }
  }

const locales = [
  {
    nombre: 'TIENDA SAN LUIS',
    direccion: 'Av. Nicolas Arriola 1894, San Luis, Lima',
    telefono: '(+51) 998 307 576',
    email: 'ventas@irsadperu.com',
    horario: 'Lunes a Viernes, 9am - 6pm <br>Sabados, 9am - 3pm',
    horarioAtencion:{
      lunesViernes: { desde: '09:00', hasta: '18:00' },
      sabado: { desde: '09:00', hasta: '15:00' }
    },
    mapa: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3901.5595499490432!2d-77.00782!3d-12.0737967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c628aff5b9f1%3A0xd434b96bb23f4899!2sIRSAD%20SAC%20-%20IMP.%20Y%20REP.%20SAN%20DIEGO%20SAC!5e0!3m2!1ses-419!2spe!4v1742935788670!5m2!1ses-419!2spe', // reemplaza con tu iframe de Google Maps
  },
  {
    nombre: 'TIENDA ATE',
    direccion: 'Av. Separadora Industrial 2960, Ate, Lima',
    telefono: '(+51) 923 526 740',
    email: 'ventas@irsadperu.com',
    horario: 'Lunes a Viernes, 9am - 6pm <br>Sabados, 9am - 3pm',
    horarioAtencion:{
      lunesViernes: { desde: '09:00', hasta: '18:00' },
      sabado: { desde: '09:00', hasta: '15:00' }
    },
    mapa: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1157.0838052073252!2d-76.9426097!3d-12.0556438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c69590187bad%3A0x96cb1e18924b1898!2sIRSAD%20S.A.C.%20-%20ATE!5e1!3m2!1ses-419!2spe!4v1742935923498!5m2!1ses-419!2spe',
  },
  {
    nombre: 'TIENDA AREQUIPA',
    direccion: 'Av. Calle Alberto Guillen 720, Arequipa, Arequipao',
    telefono: '(+51) 939 187 067',
    email: 'ventas@irsadperu.com',
    horario: 'Lunes a Viernes, 9am - 6pm <br>Sabados, 9am - 3pm',
    horarioAtencion:{
      lunesViernes: { desde: '09:00', hasta: '18:00' },
      sabado: { desde: '09:00', hasta: '15:00' }
    },
    mapa: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4539.8114604490065!2d-71.5396111!3d-16.414888899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI0JzUzLjYiUyA3McKwMzInMjIuNiJX!5e1!3m2!1ses-419!2spe!4v1742935998647!5m2!1ses-419!2spe',
    nuevo: true, // Agregado para la nueva tienda
  },
  {
    nombre: 'TIENDA AREQUIPA - CONO NORTE',
    direccion: 'Calle San Agustin Km. 9 Lote 11, Asoc. Santa Maria, Cerro Colorado, Arequipa',
    telefono: '(+51) 953 002 951',
    email: 'ventas@irsadperu.com',
    horario: 'Lunes a Viernes, 9am - 6pm <br>Sabados, 9am - 3pm',
    horarioAtencion:{
      lunesViernes: { desde: '09:00', hasta: '18:00' },
      sabado: { desde: '09:00', hasta: '15:00' }
    },
    mapa: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4541.454955169362!2d-71.5833889!3d-16.3443333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDIwJzM5LjYiUyA3McKwMzUnMDAuMiJX!5e1!3m2!1ses-419!2spe!4v1742936080527!5m2!1ses-419!2spe',
    nuevo: true, // Agregado para la nueva tienda
  },
  // Agrega más sucursales aquí
]

</script>
  
<style scoped>

.sucursales_section {
  position: relative;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2)
  ),
  url('/img/landing/CUMMINS.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  inset: 0;
  z-index: 0;
  opacity: 1;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.6); /* antes era rgba(0, 0, 0, 0.5) */
  z-index: 0;
}

  h2 {
  font-size: 3rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
  }

  .card {
  transition: transform 0.3s ease;
  margin-bottom: 1rem;
  border-radius: 12px;
  overflow: hidden;
}

.card-body {
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
.card:hover {
  transform: translateY(-5px);
}

.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
  border-radius: 12px;
  border: 1px solid transparent;
  min-height: 140px;

}

.bg-dark .glass-card {
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(209, 25, 26, 0.5);
  color: white;
}

.card-body {
  padding: 2rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .card-body {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .sucursales_section {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}


</style>