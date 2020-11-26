import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import Tab from './components/Tab.vue'
import Copy from './components/Copy.vue';
import HelloWorld from './components/HelloWorld.vue'
import './index.css'

const routes = [{
    path: '/tab',
    component: Tab,
}, {
  path: '/copy',
  component: Copy
}, {
  path: '/',
  component: HelloWorld,
}]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes
})

const app = createApp(App)
.use(router)
.mount('#app')
