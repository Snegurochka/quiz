import { createStore } from 'vuex';
import { auth, usersCollection } from '../plugins/firebase';

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
      await auth.signInWithEmailAndPassword(payload.email, payload.password);
      commit('TOGLE_AUTH');
    },

    async register({ commit }, values) {
      const userCred = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      console.log(userCred);

      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        country: values.country,
      });

      await userCred.user.updateProfile({
        displayName: values.name,
      })

      commit("TOGLE_AUTH");
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
