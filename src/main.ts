// import VueCompositionAPI from '@vue/composition-api'
import { createApp } from 'vue'
import mdiVue from 'mdi-vue/v3'

import * as mdijs from '@mdi/js'
import App from './App.vue'
import './style.css'

createApp(App)
  // .use(VueCompositionAPI)vue flickyty
  .use(mdiVue, {
    icons: mdijs,
  })
  .mount('#app')
