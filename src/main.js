import './assets/scss/base.scss'
import '@/assets/icon/iconfont.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueCookies from 'vue-cookies'

const app = createApp(App)
app.config.globalProperties.VueCookies = VueCookies
app.use(router)
app.use(ElementPlus)

app.mount('#app')
