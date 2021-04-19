<template>
  <div class="counter">
      <div class="leftBlock">
        <h1>Methods 與 Computed 的使用情境</h1>
        <ol class="noteList">
          <li>
            <span class="vueKey">computed</span> 是在監控<span class="vueKey">data</span>更動後,
            重新運算結果呈現於畫面上。可以寫在<span class="vueKey">template</span>中呈現運算結果。
            一般來說不會修改資料, 只會回傳用於畫面呈現的資料。
          </li>
          <li>
            <span class="vueKey">methods</span> 就是互動的函式，需要觸發才會運作
            會用來修改資料內容。並會不自主監聽<span class="vueKey">data</span>變更, 也不能直接在
            <span class="vueKey">template</span>中呼叫
          </li>
          <li>
            如果資料量大, <span class="vueKey">computed</span> 自然會比較慢,
            只要資料變動就會觸發, 無形之中執行次數也會增加。
            因此在大量資料時, 會建議透過 <span class="vueKey">methods</span> 減少不必要的運算喔
          </li>
        </ol>
      </div>
      <div class="rightBlock">
        <label class="labelTag" for="">A:</label>
        <input type="text" v-model="A"><br>
        <label class="labelTag" for="">B:</label>
        <input type="text" v-model="B"><br>
        <p class="item">computed: A + B = {{addCompute}}</p>
        <p class="item">methods: A + B = {{addMethod}}</p>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Counter',
  data() {
    return {
      A: '',
      B: '',
    };
  },
  methods: {
    addMethod() {
      return +this.A + +this.B;
    },
  },
  computed: {
    addCompute() {
      return +this.A + +this.B;
    },
  },
};
</script>
<style lang="scss" scoped>

.counter {
  width: 100%;
  display: flex;
  padding: 50px;
  font-size: 16px;
  background: rgb(229, 248, 210);
}

.leftBlock {
  width: 50%;
  padding: 10px 20px;
    // height: 600px;

  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .noteList {
    list-style: decimal;
    letter-spacing: .4px;
    line-height: 1.5;

    .vueKey {
      font-weight: bold;
      background: rgb(250, 227, 187);
      color: rgb(255, 72, 0);
      padding: 0 4px;
      border-radius: 4px;
    }

    li {
      margin-bottom: 16px;
      word-wrap: break-word;
    }
  }
}

.rightBlock {
  width: 50%;
  padding: 10px 20px;
}

.labelTag {
  display: block;
  // width: 20px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.item {
  margin-top: 30px;
  margin-right: 10px;
  margin-bottom: 30px;
}

</style>
