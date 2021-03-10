export default {
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
};
