import './assets/main.css'

import { createApp } from 'vue'
import pinia from './stores'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Particles from "particles.vue3";
import '@/api/axios.config'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(Particles)

app.mount('#app')
