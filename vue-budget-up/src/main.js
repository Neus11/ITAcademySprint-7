
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
library.add(faCircleInfo);


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

