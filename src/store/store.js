import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import ticketModule from './modules/ticket'

Vue.use(VueResource)
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ticketModule
  }
});

export default store;