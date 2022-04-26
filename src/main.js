import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import VuePlayerVideo from 'vue3-player-video'

import 'bootstrap/dist/js/bootstrap.min.js'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createMetaManager } from 'vue-meta'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(VuePlayerVideo, /* { default options with global component } */)
app.use(createMetaManager())

await router.isReady()
app.mount('#app')
