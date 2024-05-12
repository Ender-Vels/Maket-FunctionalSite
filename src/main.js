import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/router.js'
import VueScrollTo from 'vue-scrollto'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"
import 'bootstrap-icons/font/bootstrap-icons.css'
let app = createApp(App)
app.use(bootstrap)
app.use(router)
app.use(VueScrollTo,{
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
app.mount('#app')
