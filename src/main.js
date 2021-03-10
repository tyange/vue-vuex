import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      console.log(state);
      state.counter = state.counter + payload.value;
    }
  },
  actions: {
    ncrement(context) {
      context.commit('increment');
    },
    increase(context, payload) {
      context.commit('increase', payload);
    }
  },
  getters: {
    // state in module is a local state. so, we can approch local state, 'counter',
    // but we can't approch 'isLoggedIn' state in main store.
    // This is reason for dosen't work below line.
    // testAuth(state, getters, rootState, rootGetters) {
    //   return state.isLoggedIn;
    // },
    finalCounter(state) {
      return state.counter * 3;
    },
    nomalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }

      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    }
  }
};

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
  mutations: {
    // login(state) {
    //   state.isAuth = true;
    //   console.log('ok');
    // },
    // logout(state) {
    //   state.isAuth = false;
    //   console.log('logout');
    // }
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  },
  getters: {
    // isAuthenticated(state) {
    //   return state.isAuth;
    // }
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
