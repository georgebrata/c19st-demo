import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    symptoms: []
  },
  getters: {
    fatigueSymptoms(state) {
      return state.symptoms.filter(s => s.type === "fatigue");
    },
    feverSymptoms(state) {
      return state.symptoms.filter(s => s.type === "fever");
    },
    coughSymptoms(state) {
      return state.symptoms.filter(s => s.type === "cough");
    }
  },
  mutations: {
    addSymptom(state, payload) {
      state.symptoms.push(payload)
    }
  },
  actions: {

  }
})
