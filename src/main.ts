import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import './style.css'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()


createApp(App)
	.use(router)
	.use(pinia)
	.use(ElementPlus)
	.mount('#app')
