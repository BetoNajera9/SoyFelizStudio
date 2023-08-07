import VueGoogleMaps from '@fawmi/vue-google-maps'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { createApp } from 'vue'
import mdiVue from 'mdi-vue/v3'

import * as mdijs from '@mdi/js'
import App from './App.vue'

import './style.css'

createApp(App)
  .use(VueSmoothScroll, {
    offset: -70,
  })
  .use(VueGoogleMaps, {
    load: {
      key: import.meta.env.VITE_MAPS_API_KEY,
    },
  })
  .use(mdiVue, {
    icons: mdijs,
  })
  .mount('#app')
