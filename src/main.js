import '../public/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createPersistedState} from 'pinia-plugin-persistedstate'
import customStorage from './stores/index'

import App from './App.vue'
import router from './router'


const pinia = createPinia()
pinia.use(createPersistedState({
    key: (id) => `__notesphere__${id}`,
    storage: customStorage,
    auto: true
}))

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
