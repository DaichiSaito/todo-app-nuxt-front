import Vuex from 'vuex'

export default () =>
  new Vuex.Store({
    state: {
      users: {},
      user: {}
    },
    getters: {
      users: state => state.users
      // users: (state) => state.users
    },
    mutations: {
      setUsers(state, { users }) {
        state.users = users
      }
    },
    actions: {
      async fetchUsers({ commit }) {
        const users = await this.$axios.$get('http://localhost:3001/users')
        commit('setUsers', { users })
      }
    }
  })
