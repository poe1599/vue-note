<template>
  <div class="content">
    <div class="content__leftBlock">
      <h1 class="noteTitle">Vuex</h1>
      <ul class="noteList" style="margin-left:30px;">
        <li>藉由vuex統一管理: state(紀錄狀態)、mutations(操作狀態)、actions(操作行為)、getters(處理狀態產生的結果)、modules</li>
        <li>處理非同步行為時, 應在actions處理而不是mutations, mutations並不能處理且容易造成除錯上的麻煩</li>
        <li>避免在非mutations的地方修改state, 其結果並不會被正確紀錄</li>
        <li>strict: true, // vuex嚴謹模式:非法語句會跳錯</li>
        <li>在元件中透過this.$store.dispatch('actionName', payload), 呼叫註冊的action並傳遞payload參數</li>
        <li>在actions中透過context.commit(mutationName, payload), 呼叫註冊的mutations並傳遞payload參數</li>
        <li>在元件中可以透過mapState、mapGetters、mapActions、mapMutations, 來取得在vuex定義的內容</li>
        <li><a href="https://vuex.vuejs.org/zh/api/">vuex api</a></li>
      </ul>
    </div>
    <div class="content__rightBlock">
      <div class="displayGroup">
        <p>使用vuex管理</p><br><br>
        <button @click="plus">+{{plusNum}}</button>
        <span>{{exNum}}</span>
        <button @click="minus">-{{minusNum}}</button>
      </div>
      <div class="displayGroup">
        <p>使用mapGetters與mapActions取得在vuex定義的getters與actions</p><br>

        <p>{{showText}} <button @click="handleExBoolChange">!</button></p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'content',
  data() {
    return {
      plusNum: 1,
      minusNum: 1,
    };
  },
  methods: {
    plus() {
      // this.$store.dispatch( 呼叫的action, 傳遞的payload(payload可以包裝成物件) );
      this.$store.dispatch('handleExNumChange', { do: 'PLUS', num: this.plusNum });
    },
    minus() {
      // this.$store.dispatch( 呼叫的action, 傳遞的payload(payload可以包裝成物件) );
      this.$store.dispatch('handleExNumChange', { do: 'MINUS', num: this.minusNum });
    },
    ...mapActions(['handleExBoolChange']),
  },
  computed: {
    exNum() {
      return this.$store.state.exNum;
    },
    exBool() {
      return this.$store.state.exBool;
    },
    ...mapGetters(['showText']),

  },

};
</script>
<style lang="scss" scoped>
@import '../assets/scss/content.scss';

.displayGroup {
  // display: flex;
  width: 100%;
  padding: 30px 10px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  margin: 5px 0;

  p {
    line-height: 1.5;
  }

  button {
    padding: 4px 8px;
    margin: 0 20px;
    text-align: center;
  }
}
</style>
