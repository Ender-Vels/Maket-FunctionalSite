import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/router.js'


import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"

let app = createApp(App)
app.use(bootstrap)
app.use(router)
app.mount('#app')
