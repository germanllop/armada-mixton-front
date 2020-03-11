import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    me:{},
    friends:[],
    players:[],
    lobby:null
  },
  mutations: {
    SET_CURRENT_PLAYER: (state, player) => (state.me = player),
    SET_PLAYERS: (state, players) => (state.players = players),
    SET_FRIENDS: (state, friends) => (state.friends = friends)
  },
  actions: {
    async checkAuth({ commit }) {
      const res = await axios.get('auth/check')
      commit('SET_CURRENT_PLAYER', res.data)
    },
    async logout({ commit }) {
      await axios.get('auth/logout')
      commit('SET_CURRENT_PLAYER', {})
    },
    async fetchPlayers({ commit }) {
        const res = await axios.get('api/getPlayers')
        commit('SET_PLAYERS', res.data)
    },
    async fetchFriends({ commit }) {
        const res = await axios.get('api/getFriends')
        commit('SET_FRIENDS', res.data)
    }
  },
  modules: {
  }
})
