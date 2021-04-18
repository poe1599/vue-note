<template>
  <div class="content">
    <div class="content__leftBlock">
      <h1 class="noteTitle">Form</h1>
      <ul class="noteList" style="margin-left:20px;">
        <li>
          <spam class="vueKey">v-for</spam>可以動態生成選項
        </li>
        <li>
          透過<span class="vueKey">true-value</span>與<spam class="vueKey">false-value</spam>
          可以將勾選的布林值結果改為指定的數值
        </li>
        <li>
          修飾符<span class="vueKey">v-model.lazy</span>可以延遲變數修改, 直到離開輸入框
        </li>
        <li>
          修飾符<span class="vueKey">v-model.number</span>可以將輸入的值從string改為number
        </li>
        <li>
          修飾符<span class="vueKey">v-model.trim</span>可以將輸入前後的多餘空白切除
        </li>
        <li>修飾符可以接續使用, 例如: <span class="vueKey">v-model.lazy.trim</span></li>
      </ul>
    </div>
    <div class="content__rightBlock noteList">
      <div class="displayGroup">
        <p>單選欄: <span class="vueKey">v-model</span>="string"</p>
        <p>今晚, 我想來點 {{singleSelect}}</p>
        <select name="" id="" v-model="singleSelect">
          <option value="..." disabled>今晚, 我想來點...</option>
          <option v-for="(item,index) in optionArray" :value="item" :key="index">{{item}}</option>
        </select>
        <br><br>
        <p>多選欄: <span class="vueKey">v-model</span>="array",
          <span class="vueKey">multiple</span></p>
        <p>今晚, 我想來點
          <span v-for="(item,index) in multipleSelect" :key="index"> {{item}} </span></p>
        <select name="" id="" v-model="multipleSelect" multiple>
          <option value="..." disabled>今晚, 我想來點...</option>
          <option v-for="(item,index) in optionArray" :value="item" :key="index">{{item}}</option>
        </select>
      </div>
      <div class="displayGroup">
        <span class="vueKey">true-value</span>="打勾", <spam class="vueKey">false-value</spam>="取消"
        <p>checkBoxValue: {{checkBoxValue}}</p>
        <input type="checkbox" v-model="checkBoxValue" true-value="打勾" false-value="取消">
        {{checkBoxValue}}
      </div>
      <div class="displayGroup">
        <p><span class="vueKey">v-model.lazy</span>="{{inputTextLazy}}"</p>
        <input type="text" v-model.lazy="inputTextLazy">
        <p><span class="vueKey">v-model.number</span>={{inputNumber}}</p>
        <input type="number" v-model.number="inputNumber">
        <p><span class="vueKey">v-model.trim</span>="{{inputTextTrim}}"</p>
        <input type="text" v-model.trim="inputTextTrim">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'content',
  data() {
    return {
      optionArray: ['肯德基', '麥當勞', '達美樂', 'Subway', '星巴克', '老天祿', '50嵐', '春水堂'],
      singleSelect: '...',
      multipleSelect: [],
      checkBoxValue: '取消',
      inputTextLazy: '',
      inputNumber: 0,
      inputTextTrim: '',
    };
  },
  methods: {

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
}
</style>
