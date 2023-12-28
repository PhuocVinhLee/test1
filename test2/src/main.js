import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from "./router";

import CKEditor from '@ckeditor/ckeditor5-vue';
const pinia = createPinia();

import './assets/img/favicon/favicon.ico';
import './assets/vendor/fonts/boxicons.css';
import './assets/vendor/css/core.css';

import './assets/vendor/css/theme-default.css';

import './assets/css/demo.css';
import './assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';

import './assets/vendor/libs/apex-charts/apex-charts.css';
//<link rel="stylesheet" href="../assets/vendor/css/pages/page-auth.css"></link>
import './assets/vendor/js/helpers.js';
import './assets/vendor/css/pages/page-auth.css';
// import './assets/js/config.js';

import './assets/vendor/libs/jquery/jquery.js';
import './assets/vendor/libs/popper/popper.js';
// 
import './assets/vendor/js/bootstrap.js';
// 
import './assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js';
import './assets/vendor/js/menu.js';
import './assets/vendor/libs/apex-charts/apexcharts.js';
// import './assets/js/main.js';
import './assets/js/ui-modals.js';





//  import './assets/js/dashboards-analytics.js';

// import 'https://buttons.github.io/buttons.js';

//import store_vuex from './store_vuex';
// import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import CircularCountDownTimer from 'vue-circular-count-down-timer';
//Vue.use(CircularCountDownTimer);

createApp(App).use(router).use(pinia).use(CKEditor).mount('#app')
