import { createApp } from 'vue'
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import App from './App.vue'
import Tab from './components/Tab.vue'
import Copy from './components/Copy.vue';
import './index.css'

const routes = [{
    path: '/tab',
    component: Tab,
}, {
  path: '/copy',
  component: Copy
}]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes
})

const app = createApp(App)
.use(router)
.mount('#app')
