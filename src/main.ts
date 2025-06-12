import './main.styl'


import App from './App.vue'
import { loadDatabase } from './assets/scripts/database'
import { hotkey } from './assets/scripts/hotkey'
import { logCheck, updateCheck } from './assets/scripts/update'
import { analytics } from './utils/analytics'

// analytics('G-PW30Q3ZHX1', import.meta.env.MODE === 'development')

createApp(App).mount('#app')

hotkey()
logCheck()
loadDatabase().then(updateCheck)
