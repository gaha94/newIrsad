<template>
    <section
      id="sucursales"
      class="py-5 border-top"
      :class="darkMode ? 'bg-dark text-white' : 'bg-light text-dark'"
    >
      <div class="container">
        <h2 class="fw-bold text-center mb-5" :class="darkMode ? 'text-light' : 'text-danger'">
          Nuestros Locales
        </h2>
  
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div
            class="col"
            v-for="(local, index) in locales"
            :key="index"
            data-aos="fade-up"
          >
            <div
              class="card h-100 shadow-sm"
              :class="darkMode ? 'bg-secondary text-white' : ''"
            >
              <div class="card-body">
                <h5
                  class="card-title fw-bold"
                  :class="darkMode ? 'text-warning' : 'text-danger'"
                >
                  {{ local.nombre }}
                </h5>
  
                <p><strong>📍 Dirección:</strong> {{ local.direccion }}</p>
                <p><strong>📞 Teléfono:</strong> {{ local.telefono }}</p>
                <p v-if="local.email"><strong>✉️ Correo:</strong> {{ local.email }}</p>
  
                <div class="d-flex align-items-start mb-2">
                  <span class="me-2 mt-1">🕒</span>
                  <span>
                    <strong>Horario:</strong> <span v-html="local.horario"></span>
                  </span>
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
    defineProps({
    darkMode: Boolean
    })

  const locales = [
    {
      nombre: 'TIENDA SAN LUIS',
      direccion: 'Av. Nicolas Arriola 1894, San Luis, Lima',
      telefono: '(+51) 998 307 576',
      email: 'ventas@irsadperu.com',
      horario: 'Lunes a Viernes, 9am - 6pm <br>Sabados, 9am - 3pm',
      mapa: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3901.5595499490432!2d-77.00782!3d-12.0737967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c628aff5b9f1%3A0xd434b96bb23f4899!2sIRSAD%20SAC%20-%20IMP.%20Y%20REP.%20SAN%20DIEGO%20SAC!5e0!3m2!1ses-419!2spe!4v1742935788670!5m2!1ses-419!2spe', // reemplaza con tu iframe de Google Maps
    },
    {
      nombre: 'TIENDA ATE',
      direccion: 'Av. Separadora Industrial 2960, Ate, Lima',
      telefono: '(+51) 923 526 740',
      email: 'ventas@irsadperu.com',
      horario: 'Lunes a Viernes, 9am - 6pm <br>Sabados, 9am - 3pm',
      mapa: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1157.0838052073252!2d-76.9426097!3d-12.0556438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c69590187bad%3A0x96cb1e18924b1898!2sIRSAD%20S.A.C.%20-%20ATE!5e1!3m2!1ses-419!2spe!4v1742935923498!5m2!1ses-419!2spe',
    },
    {
      nombre: 'TIENDA AREQUIPA',
      direccion: 'Av. Calle Alberto Guillen 720, Arequipa, Arequipao',
      telefono: '(+51) 939 187 067',
      email: 'ventas@irsadperu.com',
      horario: 'Lunes a Viernes, 9am - 6pm <br>Sabados, 9am - 3pm',
      mapa: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4539.8114604490065!2d-71.5396111!3d-16.414888899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI0JzUzLjYiUyA3McKwMzInMjIuNiJX!5e1!3m2!1ses-419!2spe!4v1742935998647!5m2!1ses-419!2spe',
    },
    {
      nombre: 'TIENDA AREQUIPA - CONO NORTE',
      direccion: 'Calle San Agustin Km. 9 Lote 11, Asoc. Santa Maria, Cerro Colorado, Arequipa',
      telefono: '(+51) 953 002 951',
      email: 'ventas@irsadperu.com',
      horario: 'Lunes a Viernes, 9am - 6pm <br>Sabados, 9am - 3pm',
      mapa: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4541.454955169362!2d-71.5833889!3d-16.3443333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDIwJzM5LjYiUyA3McKwMzUnMDAuMiJX!5e1!3m2!1ses-419!2spe!4v1742936080527!5m2!1ses-419!2spe',
    },
    // Agrega más sucursales aquí
  ]
  </script>
  