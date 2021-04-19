<template>
  <div class="content">
    <div class="content__leftBlock">
      <h1 class="noteTitle">Directive</h1>
      <ul class="noteList" style="margin-left:30px;">
        <li>Directive可以全域註冊或區域註冊自訂指令, 例如: v-xxx</li>
        <li>
          全局註冊: <br>
          Vue.directive( 'xxx', { // 指令定義 } )
        </li>
        <li>
          局部註冊(元件內): <br>
          directives:{ xxx: { // 指令定義 } }
        </li>
        <li>
          指令定義可以搭配鉤子函數: <br>
          {<br>
          bind: function ( ) { },<br>
          inserted: function ( ) { },<br>
          update: function ( ) { },<br>
          componentUpdated: function () { },<br>
          unbind: function ( ) { }<br>
          }
        </li>
        <li>鉤子函數內可傳入對應的
          <a href="https://cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0">鉤子函數參數</a></li>
        <li><a href="https://cn.vuejs.org/v2/guide/custom-directive.html">directive api</a></li>
      </ul>
    </div>
    <div class="content__rightBlock"></div>
  </div>
</template>
<script>
export default {
  name: 'directive',
  data() {
    return {

    };
  },
  methods: {

  },

};
</script>
<style lang="scss" scoped>
@import '../assets/scss/content.scss';

</style>
