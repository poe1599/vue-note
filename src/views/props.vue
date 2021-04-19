<template>
  <div class="content">
    <div class="content__leftBlock">
      <h1 class="noteTitle">在父母元件</h1>
      <ul class="noteList" style="margin-left:30px;">
        <li>
          props可以搭配v-bind動態傳遞給子女元件
        </li>
        <li>
          如果沒有v-bind則為靜態傳遞, 內容綁定為字串
        </li>
      </ul>
      <h1 class="noteTitle">在子女元件</h1>
      <ul class="noteList" style="margin-left:30px;">
        <li>
          props可設定成陣列或物件, props:['xxx']、props:{'xxx'}
        </li>
        <li>
          props傳遞的參數可藉由物件定義型別與預設值, 例如: props:{xxx:{type:String, default:''}} <br>
          <a href="https://vuejs.org/v2/guide/components-props.html#Prop-Validation">props定義型別</a>
        </li>
        <li>
          子女元件如果還沒接到props (例如父母透過非同步取得再傳給子女), 相關dom元素可以搭配使用v-if來延遲渲染
        </li>
        <li>
          vue的架構是單向數據流, 子女元件應避免直接修改props, 子女元件可設定一個data變數承接傳下來的props,
          當子女元件需要修改資料時則修改data
        </li>
      </ul>
      <h1 class="noteTitle">$emit()向上傳遞</h1>
      <ul class="noteList"  style="margin-left:30px;">
        <li>$emit( '父母元件自訂事件', 傳遞參數 )</li>
        <li>在子女元件由$emit()指定觸發父母元件的自訂事件與傳遞參數</li>
        <li>在父母元件中, 對子女元件加掛自訂事件</li>
        <li><a href="https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event">
          Emitting a Value With an Event
        </a></li>
      </ul>
    </div>
    <div class="content__rightBlock"></div>
  </div>
</template>
<script>
export default {
  name: 'props',
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
