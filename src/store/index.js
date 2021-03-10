import { createStore } from 'vuex';

import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

import counterModule from './modules/counter/index';

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      // isAuth: false,
      isLoggedIn: false
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;
