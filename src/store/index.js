import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // 紀錄狀態
    exNum: 0,
    exBool: false,
  },
  mutations: { // 操作狀態
    PLUS(state, payload) {
      state.exNum += payload;
    },
    MINUS(state, payload) {
      state.exNum -= payload;
    },
    INVERT_BOOL(state) {
      state.exBool = !state.exBool;
    },
  },
  actions: { // 操作行為
    handleExNumChange(context, payload) {
      context.commit(payload.do, payload.num);
    },
    handleExBoolChange(context) {
      context.commit('INVERT_BOOL');
    },
  },
  getters: {
    showText(state) {
      const BL = state.exBool;
      return `Something is ${BL}, something is ${!BL}, I may be confused.`;
    },
  },
  modules: {
  },
  strict: true, // vuex嚴謹模式:非法語句會跳錯
});
