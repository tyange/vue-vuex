export default {
  ncrement(context) {
    context.commit('increment');
  },
  increase(context, payload) {
    context.commit('increase', payload);
  }
};
