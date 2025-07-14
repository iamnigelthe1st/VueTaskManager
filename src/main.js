// src/main.js

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// This creates the main Vue application instance.
// It takes the root component 'App' as an argument.
const app = createApp(App)

// This mounts the application instance to the DOM element with the id 'app'.
// This element is defined in `index.html`.
app.mount('#app')