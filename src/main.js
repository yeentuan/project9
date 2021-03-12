import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue'
import firebase from 'firebase/app'
import 'firebase/firestore'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyAOYXOQCoUklb21WuFHrgaRD1k-HeOqRkI",
  authDomain: "project33-8cd03.firebaseapp.com",
  projectId: "project33-8cd03",
  storageBucket: "project33-8cd03.appspot.com",
  messagingSenderId: "259330523423",
  appId: "1:259330523423:web:71a487b80c0d3abaf5f02a",
  measurementId: "G-0KC9PLP99M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
