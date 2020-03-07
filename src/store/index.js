import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    me:{},
    friends:[],
    players:[]
  },
  mutations: {
    setCurrentPlayer: (state, player) => (state.me = player),
    fillPlayers: (state, players) => (state.players = players),
    fillFriends: (state, friends) => (state.friends = friends)
  },
  actions: {
    async fetchMe({ commit }) {
      const res = await axios.get('api/getPlayer')
      //console.log(res)
      commit('setCurrentPlayer', res.data)
    },
    async fetchPlayers({ commit }) {
        const res = await axios.get('api/getPlayers')
        commit('fillPlayers', res.data)
    },
    async fetchFriends({ commit }) {
        const res = await axios.get('api/getFriends')
        commit('fillFriends', res.data)
    }
  },
  modules: {
  }
})
