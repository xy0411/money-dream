import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import naive from 'naive-ui'
import router from './router/router'

const app = createApp(App)
app.use(router)
app.use(naive)
app.mount('#app')
