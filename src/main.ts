import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'
import router from "./router/router";

createApp(App).use(router).use(naive).mount('#app')
