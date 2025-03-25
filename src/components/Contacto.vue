<template>
  <section 
    id="contacto"
    class="py-5 border-top"
    :class="darkMode ? 'bg-dark text-white' : 'bg-light text-dark'"
  >
    <div class="container">
      <h2 class="text-center fw-bold mb-5" :class="darkMode ? 'text-white' : 'text-danger'">Contáctanos</h2>

      <div class="row">
        <!-- Formulario -->
        <div class="col-md-7 mb-4">
          <form ref="formSection" @submit.prevent="handleSubmit">
            <div class="row g-3">
              <div class="col-md-6">
                <label for="nombre" class="form-label fw-semibold">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  v-model="form.nombre"
                  class="form-control"
                  required
                  placeholder="Tu nombre"
                  :class="darkMode ? 'bg-secondary text-white border-0' : ''"
                />
              </div>

              <div class="col-md-6">
                <label for="correo" class="form-label fw-semibold">Correo electrónico</label>
                <input
                  type="email"
                  id="correo"
                  v-model="form.correo"
                  class="form-control"
                  required
                  placeholder="nombre@correo.com"
                  :class="darkMode ? 'bg-secondary text-white border-0' : ''"
                />
              </div>

              <div class="col-12">
                <label for="asunto" class="form-label fw-semibold">Asunto</label>
                <input
                  type="text"
                  id="asunto"
                  v-model="form.asunto"
                  class="form-control"
                  placeholder="Motivo del mensaje"
                  :class="darkMode ? 'bg-secondary text-white border-0' : ''"
                />
              </div>

              <div class="col-12">
                <label for="mensaje" class="form-label fw-semibold">Mensaje</label>
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

              <div class="col-12 text-end">
                <button type="submit" class="btn btn-danger px-4">Enviar mensaje</button>
              </div>
            </div>
          </form>
        </div>

        <!-- Información de contacto -->
        <div class="col-md-5">
          <div
            class="border rounded shadow-sm p-4 h-100"
            :class="darkMode ? 'bg-secondary text-white' : 'bg-white'"
          >
            <h5 class="fw-bold mb-3" :class="darkMode ? 'text-white' : 'text-danger'">
              Información de contacto
            </h5>
            <p><strong>📍 Dirección:</strong> Av. Principal 123, Lima, Perú</p>
            <p><strong>📞 Teléfono:</strong> +51 999 999 999</p>
            <p><strong>📧 Correo:</strong> contacto@miempresa.com</p>
            <p><strong>🕒 Horario:</strong><br>Lunes a Viernes, 9am - 6pm<br>Sábados, 9am - 3pm</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Swal from 'sweetalert2'
import { reactive, ref } from 'vue'

defineProps({ darkMode: Boolean })

const form = reactive({
  nombre: '',
  correo: '',
  asunto: '',
  mensaje: ''
})

const formSection = ref(null)

const handleSubmit = () => {
  // Validación
  if (!form.nombre || !form.correo || !form.asunto || !form.mensaje) {
    // 🔽 Scroll hacia el formulario
    formSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // 🔔 Alerta visual
    Swal.fire({
      title: 'Campos incompletos',
      text: 'Por favor, completa todos los campos antes de enviar.',
      icon: 'warning',
      confirmButtonColor: darkMode ? '#ffffff' : '#d1191a',
      background: darkMode ? '#333' : '#fff',
      color: darkMode ? '#fff' : '#000'
    })
    return
  }

  // ✅ Alerta de éxito
  Swal.fire({
    title: '¡Mensaje enviado!',
    text: `Gracias por contactarnos, ${form.nombre}. Te responderemos pronto.`,
    icon: 'success',
    confirmButtonColor: darkMode ? '#ffffff' : '#d1191a',
    background: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000'
  })

  // Limpiar
  form.nombre = ''
  form.correo = ''
  form.asunto = ''
  form.mensaje = ''
}
</script>

<style scoped>
input:focus, textarea:focus {
  border-color: #d1191a;
  box-shadow: 0 0 0 0.2rem rgba(209, 25, 26, 0.25);
  outline: none;
}
</style>
