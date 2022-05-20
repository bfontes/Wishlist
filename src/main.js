import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueToast from 'vue-toast-notification';
import Loading from 'vue-loading-overlay';

import styles from './styles/index.scss';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-toast-notification/dist/theme-sugar.css';

import Menu from 'vue-material-design-icons/Menu.vue';
import Eye from 'vue-material-design-icons/Eye.vue';
import Truck from 'vue-material-design-icons/Truck.vue';
import Heart from 'vue-material-design-icons/Heart.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import MapMarker from 'vue-material-design-icons/MapMarker.vue';
import CloseCircleOutline from 'vue-material-design-icons/CloseCircleOutline.vue';


Vue.config.productionTip = false;

Vue.use(VueToast);
Vue.use(Loading);

Vue.component('menu-icon', Menu);
Vue.component('eye-icon', Eye);
Vue.component('truck-icon', Truck);
Vue.component('heart-outline', HeartOutline);
Vue.component('heart', Heart);
Vue.component('map-marker', MapMarker);
Vue.component('close-circle-outline', CloseCircleOutline);

new Vue({
  styles,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
