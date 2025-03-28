<template>
  <section 
    id="contacto"
    class="contactos_section py-5 scroll-offset"
    :class="darkMode ? 'bg-dark text-white' : 'bg-light text-dark'"
    style="min-height: 100vh; overflow: hidden;"
  >
    <div class="overlay"></div>
    <div class="container z-3 position-relative">
      <h2 class="text-center fw-bold mb-5 text-shadow" 
      :class="darkMode ? 'text-white' : 'text-danger'"
      >
        Contáctanos
      </h2>

      <div class="row d-flex flex-column flex-lg-row justify-content-between align-items-start gap-4">
        <!-- Formulario -->
        <div class="col-lg-6 glass-card p-4" data-aos="fade-right">
          <form ref="formSection" @submit.prevent="handleSubmit">
            <div class="row g-3">
              <div class="col-12">
                <label for="nombre" class="form-label fw-semibold"
                :class="darkMode ? 'text-white' : 'text-danger'"
                >Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  v-model="form.nombre"
                  class="form-control"
                  required
                  autocomplete="off"
                  placeholder="Tu nombre"
                  :class="darkMode ? 'bg-secondary text-white border-0' : ''"
                />
              </div>

              <div class="col-12">
                <label for="correo" class="form-label fw-semibold"
                :class="darkMode ? 'text-white' : 'text-danger'"
                >Correo electrónico</label>
                <input
                  type="email"
                  id="correo"
                  v-model="form.correo"
                  class="form-control"
                  required
                  autocomplete="off"
                  placeholder="nombre@correo.com"
                  :class="darkMode ? 'bg-secondary text-white border-0' : ''"
                />
              </div>

              <div class="col-12">
                <label for="asunto" class="form-label fw-semibold"
                :class="darkMode ? 'text-white' : 'text-danger'"
                >Asunto</label>
                <input
                  type="text"
                  id="asunto"
                  v-model="form.asunto"
                  class="form-control"
                  autocomplete="off"
                  placeholder="Motivo del mensaje"
                  :class="darkMode ? 'bg-secondary text-white border-0' : ''"
                />
              </div>

              <div class="col-12">
                <label for="mensaje" class="form-label fw-semibold"
                :class="darkMode ? 'text-white' : 'text-danger'"
                >Mensaje</label>
                <textarea
                  id="mensaje"
                  v-model="form.mensaje"
                  rows="5"
                  class="form-control"
                  required
                  placeholder="Escribe tu mensaje..."
                  :class="darkMode ? 'bg-secondary text-white border-0' : ''"
                ></textarea>
              </div>

              <div class="col-12 text-center">
                <button type="submit" class="btn btn-danger px-4">Enviar mensaje</button>
              </div>
            </div>
          </form>
        </div>

        <!-- Información de contacto -->
        <div class="col-lg-6 glass-card p-4 h-100" data-aos="fade-left">
          <h5 class="fw-bold mb-3" :class="darkMode ? 'text-white' : 'text-danger'">
            Información de contacto
          </h5>
          <p><strong>🏢 Dirección:</strong> TIENDA SAN LUIS</p>
          <p><strong>📍 Dirección:</strong> Av. Nicolas Arriola 1894, San Luis, Lima</p>
          <p><strong>📞 Teléfono:</strong> +51 998 307 576</p>
          <p><strong>🏢 Dirección:</strong> TIENDA ATE</p>
          <p><strong>📍 Dirección:</strong> Av. Separadora Industrial 2960, Ate, Lima</p>
          <p><strong>📞 Teléfono:</strong> +51 923 526 740</p>
          <p><strong>🏢 Dirección:</strong> TIENDA AREQUIPA</p>
          <p><strong>📍 Dirección:</strong> Av. Calle Alberto Guillen 720, Arequipa, Arequipao</p>
          <p><strong>📞 Teléfono:</strong> +51 939 187 067</p>
          <p><strong>🏢 Dirección:</strong> TIENDA TIENDA AREQUIPA - CONO NORTE</p>
          <p><strong>📍 Dirección:</strong> Calle San Agustin Km. 9 Lote 11, Asoc. Santa Maria, Cerro Colorado, Arequipa</p>
          <p><strong>📞 Teléfono:</strong> +51 953 002 951</p>
          <p><strong>📧 Correo:</strong> ventas@irsadperu.com</p>
          <p><strong>🕒 Horario:</strong><br>Lunes a Viernes, 9am - 6pm<br>Sábados, 9am - 3pm</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Swal from 'sweetalert2'
import { reactive, ref } from 'vue'

const props = defineProps({ darkMode: Boolean })

const form = reactive({
  nombre: '',
  correo: '',
  asunto: '',
  mensaje: ''
})

const formSection = ref(null)

const handleSubmit = async () => {
  if (!form.nombre || !form.correo || !form.asunto || !form.mensaje) {
    formSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    Swal.fire({
      title: 'Campos incompletos',
      text: 'Por favor, completa todos los campos antes de enviar.',
      icon: 'warning',
      confirmButtonColor: props.darkMode ? '#ffffff' : '#d1191a',
      background: props.darkMode ? '#333' : '#fff',
      color: props.darkMode ? '#fff' : '#000'
    })
    return
  }

  try {
    const response = await fetch('http://localhost/backend/contacto.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    const data = await response.json()

    if (response.ok) {
      Swal.fire({
        title: '¡Mensaje enviado!',
        text: data.message || 'Gracias por contactarnos.',
        icon: 'success',
        confirmButtonColor: props.darkMode ? '#ffffff' : '#d1191a',
        background: props.darkMode ? '#333' : '#fff',
        color: props.darkMode ? '#fff' : '#000'
      })

      // Limpiar campos
      form.nombre = ''
      form.correo = ''
      form.asunto = ''
      form.mensaje = ''
    } else {
      throw new Error(data.error || 'Error al enviar el mensaje.')
    }
  } catch (error) {
    Swal.fire({
      title: 'Error',
      text: error.message,
      icon: 'error',
      confirmButtonColor: props.darkMode ? '#ffffff' : '#d1191a',
      background: props.darkMode ? '#333' : '#fff',
      color: props.darkMode ? '#fff' : '#000'
    })
  }
}
</script>

<style scoped>
.contactos_section {
  position: relative;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url('/img/backgrounds/contactanos-rojo.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 0;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 0;
}

/* Glass efecto */
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  padding: 2rem;
}

/* Ajuste para información también */


/* Título */
h2 {
  font-size: 3rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
}

/* Separación */
.row {
  gap: 0.2rem;
}

/* Inputs y transición */
input:focus,
textarea:focus {
  border-color: #d1191a;
  box-shadow: 0 0 0 0.2rem rgba(209, 25, 26, 0.25);
  outline: none;
  transition: 0.3s ease;
}

input,
textarea {
  transition: border 0.3s ease, background-color 0.3s ease;
}

/* Responsive: espaciado entre columnas */
@media (min-width: 768px) {
  .row > .col-md-6,
  .row > .col-md-5 {
    margin-top: 0;
  }
}

@media (min-width: 992px) {
  .glass-card, .glass-box {
    width: 48%;
  }
}

</style>

