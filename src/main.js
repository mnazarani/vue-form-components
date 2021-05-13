import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// import Base components for global registration

import BaseInput from './components/BaseInput.vue'
import BaseSelect from './components/BaseSelect.vue'
import BaseCheckbox from './components/BaseCheckbox.vue'
import BaseRadio from './components/BaseRadio.vue'
import BaseRadioGroup from './components/BaseRadioGroup.vue'

const app = createApp(App)

app.component('BaseInput', BaseInput)

app.component('BaseSelect', BaseSelect)

app.component('BaseCheckbox', BaseCheckbox)

app.component('BaseRadio', BaseRadio)

app.component('BaseRadioGroup', BaseRadioGroup)


app.use(router).mount('#app')
