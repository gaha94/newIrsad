import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// 👇 Aquí se importa y registra correctamente el plugin
import VueObserveVisibility from 'vue-observe-visibility'

const app = createApp(App)
app.use(VueObserveVisibility) // 👈 ¡esto es clave!
app.mount('#app')

AOS.init({
    duration: 800,
    once: true
  })