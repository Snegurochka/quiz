import { createStore } from 'vuex';
import { auth } from '../plugins/firebase';

export default createStore({
  state: {
    isUserLoggedIn: false,
  },
  mutations: {
    TOGLE_AUTH(state) {
      state.isUserLoggedIn = !state.isUserLoggedIn;
    }
  },
  actions: {
    async login({ commit }, payload) {
      auth.signInWithEmailAndPassword(payload.email, payload.password);

      commit('TOGLE_AUTH');
    },

    init_login({ commit }) {
      const user = auth.currentUser;

      if (user) {
        commit('TOGLE_AUTH');
      }
    },
    async signout({ commit }) {
      await auth.signOut();
      commit('TOGLE_AUTH');
    }
  },
  modules: {
  }
})
