import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

import { install as VexopUI } from 'vexip-ui'
import 'vexip-ui/css/index.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VexopUI)

app.mount('#app')
