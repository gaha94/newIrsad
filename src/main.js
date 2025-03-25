import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import VueObserveVisibility from 'vue-observe-visibility'

const app = createApp(App) // ✅ FALTABA ESTO

app.use(VueObserveVisibility)
app.mount('#app') // ✅ Coloca después de `use`

AOS.init()
