import Vue from 'vue'
import Vuex from 'vuex'
import userdata from './modules/userdata.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userdata:userdata
  }
})
