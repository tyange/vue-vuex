import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isAuth: false
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    login(state) {
      state.isAuth = true;
      console.log('ok');
    },
    logout(state) {
      state.isAuth = false;
      console.log('logout');
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    increase(context, payload) {
      context.commit('increase', payload);
    }
  },
  getters: {
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
    },
    isAuthenticated(state) {
      return state.isAuth;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
