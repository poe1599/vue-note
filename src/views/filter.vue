<template>
  <div class="content">
    <div class="content__leftBlock">
      <h1 class="noteTitle">Filter</h1>
      <ul class="noteList" style="margin-left:30px;">
        <li>filter可以做成全局註冊或局部註冊</li>
        <li>
          全局註冊: <br>
          Vue.filter( 'my-filter', function (value) { // 返回处理后的值 } )
        </li>
        <li>
          局部註冊(元件內): <br>
          filters:{ my-filter(value){ // 返回处理后的值 }, }
        </li>
        <li>
          對data變數使用filter來處理, 也可以使用多個filter, 例如: <br>
          {{dataText}}} 或<br>{{dataText2}}
        </li>
      </ul>
    </div>
    <div class="content__rightBlock"></div>
  </div>
</template>
<script>
export default {
  name: 'filter',
  data() {
    return {
      dataText: '{{ dataValue | filterName }}',
      dataText2: '{{ dataValue | filterName1 | filterName2 }}',
    };
  },
  methods: {

  },

};
</script>
<style lang="scss" scoped>
@import '../assets/scss/content.scss';

</style>
