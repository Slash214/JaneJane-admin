import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import './style.css'
import 'element-plus/dist/index.css'
import './styles/iconfont.js'
import router from './router'
import App from './App.vue'

createApp(App)
    .use(router)
	.use(ElementPlus)
	.mount('#app')
