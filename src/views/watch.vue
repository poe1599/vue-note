<template>
  <div class="content">
    <div class="content__leftBlock">
      <h1 class="noteTitle">methods / computed / watch</h1>
      <ul class="noteList" style="padding-left:30px;">
        <li><span class="vueKey">methods</span>中可自訂義function, 需要綁定對應的事件來呼叫</li>
        <li><span class="vueKey">computed</span>可以直接在dom元素上呼叫, 透過
        <span class="vueKey">return</span>來重渲染頁面, 但資料量大時會有效能問題
        </li>
        <li>
          <span class="vueKey">watch</span>可以針對特定變數改變時呼叫對應的function, 可以呼叫在
          <span class="vueKey">methods</span>中被定義的function
        </li>
        <li>
          <span class="vueKey">watch</span>中定義的function包含兩個參數, 分別為現在與改變前, 例如:
          變數: function (val, oldVal) {}
        </li>
        <li>
          <span class="vueKey">watch</span>以下寫法, 其回呼會在任何被監聽對象的property改變時被調用,
          不論其被嵌套的多深<br>
          <span class="vueKey">watch</span>:{ <br>
          <span class="vueKey">變數</span>: {<br>
          handler: function (val, oldVal) { /* ... */ },<br>
          deep: true <br>
          }}
        </li>
        <li>
          <span class="vueKey">watch</span>也可以使用陣列, 並在該陣列中放入function,
          陣列中的function會按順序執行, 例如: <br>
          <span class="vueKey">watch</span>:{ <br>
          <span class="vueKey">變數</span>: [<br>
          'function01', 'function02', 'function03'
          ]}
        </li>
        <li>
          <span class="vueKey">watch</span>監聽的變數可以透過陣列變成巢狀, 例如: <br>
          <span class="vueKey">watch</span>:{ <br>
          <span class="vueKey">變數A</span>: [<br>
          變數B: 'function01',
          ]}
        </li>
      </ul>
    </div>
    <div class="content__rightBlock">
      numA:
      <button @click="plusOne('numA')">+</button>
      <input class="numInput" v-model="numA">
      <button @click="minusOne('numA')">-</button><br><br>
      numB:
      <button @click="plusOne('numB')">+</button>
      <input class="numInput" v-model="numB">
      <button @click="minusOne('numB')">-</button><br><br>
      numC:
      <button @click="plusOne('numC')">+</button>
      <input class="numInput" v-model="numC">
      <button @click="minusOne('numC')">-</button><br><br>
      computed (numA + numB + numC) : {{totalNum}} <br><br>
      <div class="box" :style="{background:BgColor}">{{BgColor}}</div>
      <br>
      <div class="msgBox">
        <span style="color:red;">New msg:</span><br>
        <span v-html="msg"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'watch',
  data() {
    return {
      numA: 0,
      numB: 0,
      numC: 0,
      msg: '',
    };
  },
  methods: {
    plusOne(v) {
      this[v] += 1;
    },
    minusOne(v) {
      this[v] -= 1;
    },
  },
  computed: {
    totalNum() {
      return this.numA + this.numB + this.numC;
    },
    BgColor() {
      return `rgb(${this.numA % 26}0,${this.numB % 26}0,${this.numC % 26}0)`;
    },
  },
  watch: {
    numA(value, oldValue) {
      this.numA = +this.numA;
      this.msg = `Now numA is ${value}, last numA is ${oldValue}<br>${this.msg}`;
    },
    numB: [
      function toNumB(value, oldValue) {
        this.numB = +this.numB;
        this.msg = `Now numB is ${value}, last numB is ${oldValue}<br>${this.msg}`;
      }],
    numC: [
      function toNumC(value, oldValue) {
        this.numC = +this.numC;
        this.msg = `Now numC is ${value}, last numC is ${oldValue}<br>${this.msg}`;
      },
    ],
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

button {
  width: 30px;
}

.numInput {
  width: 50px;
  margin: 10px;
  text-align: center;
}

.box {
  width: 100%;
  height: 100px;
  border-radius: 20px;
  // border: 1px solid black;
  text-align: center;
  line-height: 100px;
  font-size: 24px;
  font-weight: 600;
  color: rgb(217, 223, 223);
}

.msgBox {
  width: 100%;
  height: 200px;
  overflow-y: scroll;
}

</style>
