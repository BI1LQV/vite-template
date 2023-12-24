/* eslint-disable no-console */
import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import { createPinia } from "pinia"

import routes from "virtual:generated-pages"
import App from "./App.vue"
import now from "~build/time"
import { sha } from "~build/info"

import "@unocss/reset/tailwind.css"
import "./styles/main.css"
import "uno.css"

if (!import.meta.env.DEV) {
  console.log("BUILD INFO")
  console.log("Build Time:", now)
  console.log("Version:", sha)
  console.log("Author: BI1LQV")
}

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
const pinia = createPinia()
app.use(pinia)
app.mount("#app")
