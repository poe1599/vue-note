<template>
  <div class="content">
    <div class="content__leftBlock" style="width:40%;">
      <h1 class="noteTitle">v-for</h1>
      <ul class="noteList" style="padding-left:30px;">
        <li>
          <span class="vueKey">v-for</span>可以搭配
          <span class="vueKey">陣列</span>或<span class="vueKey">物件</span>來進行渲染
        </li>
        <li>
          <span class="vueKey">v-for</span>建議要搭配<span class="vueKey">:key</span>
          來確保渲染不會因為vue的dom重新利用機制而出錯
        </li>
        <li>
          在function中直接用<span class="vueKey">this.array.length=0</span>,
          並不能讓畫面重新被渲染 (資料仍會被更改)
        </li>
        <li>
          直接指定索引來修改並不能讓畫面重新被渲染, 例如:
          <span class="vueKey">this.array[1]='XXX'</span> (資料仍會被更改)
        </li>
        <li>
          使用<span class="vueKey">Vue.set( target, propertyName/index, value )</span>
          可以針對特定鍵或索引來更動資料, 並且觸發重新渲染
        </li>
        <li>
          <span class="vueKey">v-for</span>也可以搭配數值來製作選項等, 例如:
          <span class="vueKey">v-for="item in number"</span>
        </li>
        <li>
          可以在<span class="vueKey">template</span>中使用<span class="vueKey">v-for</span>,
          但要注意<span class="vueKey">template</span>上不能使用<span class="vueKey">:key</span>,
          必須在內層的dom元素上加<span class="vueKey">:key</span>
        </li>
        <li>
          dom元素上同時有<span class="vueKey">v-for</span>與<span class="vueKey">v-if</span>時,
          會優先執行<span class="vueKey">v-for</span>接著才是<span class="vueKey">v-if</span>
        </li>
        <li>陣列排序等相關的常用方法:filter()、sort()、reverse()、match()、toLowerCase()</li>
      </ul>
    </div>
    <div class="content__rightBlock noteList" style="width:60%;">
      <div class="displayGroup">
        <h1 class="noteTitle">陣列</h1>
        <ul>
          <li><span class="vueKey">v-for="(item,index) in arrayData" :key="index"</span></li>
          <li><input type="text" v-model="filterText"
          placeholder="請輸入品種" @keyup.enter="filterArrayData"></li>
          <li><button @click="sortByAge" style="margin-right:10px;">按照年齡排序</button>
          <button @click="arrayReverse">反轉排序</button></li>
        </ul>
        <ul v-if="filterArray.length===0">
          <li v-for="(item,index) in arrayData" :key="index">
            <span class="colorBlock01">{{item.owner}}</span>
            養了一隻
            <span class="colorBlock02">{{item.age}}</span>
            歲的
            <span class="colorBlock03">{{item.species}}</span>
            , 牠的名子叫
            <span class="colorBlock04">{{item.name}}</span>
          </li>
        </ul>
        <ul v-if="filterArray.length>=1">
          <li v-for="(item,index) in filterArray" :key="index">
            <span class="colorBlock01">{{item.owner}}</span>
            養了一隻
            <span class="colorBlock02">{{item.age}}</span>
            歲的
            <span class="colorBlock03">{{item.species}}</span>
            , 牠的名子叫
            <span class="colorBlock04">{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="displayGroup">
        <h1 class="noteTitle">物件</h1>
        <ul>
          <li><span class="vueKey">v-for="(item,index) in arrayData" :key="index"</span></li>
          <!-- <li> arrayData: [{name: '多多', Species: '拉不拉多', age: 3, owner: '文哲'},...]</li> -->
          <li v-for="(item,key) in objectData" :key="key">
            <span class="colorBlock02">{{key}}</span>附近有
            <span class="colorBlock03"
            v-for="(arrayItem,index) in item" :key="index">{{arrayItem}}</span>
          </li>
        </ul>
      </div>
      <div class="displayGroup">
        <h1 class="noteTitle">數值</h1>
        <p>data:{radio:{{radio}}}</p>
        <template v-for="item in 10">
          <input type="radio" name="number" :key="item" :value="item" v-model="radio">
          <label for="" :key="item" style="margin-right:20px;">{{item}}</label>
        </template>
        <!-- <input type="checkbox" v-for
        ="item in 10" :key="item" :value="item">{{item}}</input> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vFor',
  data() {
    return {
      arrayData: [
        {
          name: '多多', species: '拉不拉多', age: 3, owner: '文哲',
        },
        {
          name: '大吉', species: '吉娃娃', age: 1, owner: '學恆',
        },
        {
          name: '穆穆', species: '邊境牧羊犬', age: 5, owner: '佳瑜',
        },
        {
          name: '小黃', species: '黃金獵犬', age: 2, owner: '世堅',
        },
      ],
      filterText: '',
      filterArray: [],
      objectData: {
        南港展覽館: ['50嵐', '星巴克', '路易莎', '茶魔', '丹丹', '7-11'],
        南港車站: ['無印良品', 'comebuy', '麥當勞', '全家', '達美樂'],
        中研院: ['肯德基', '八方', '萊爾富', '圓石', '摩斯', 'subway'],
      },
      radio: '0',
    };
  },
  methods: {
    filterArrayData() {
      const vm = this;
      vm.filterArray = vm.arrayData.filter((item) => item.species.match(vm.filterText));
    },
    sortByAge() {
      const vm = this;
      vm.filterArray = vm.arrayData.sort((a, b) => a.age - b.age);
    },
    arrayReverse() {
      this.filterArray = this.filterArray.reverse();
    },
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

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  transition: 1s;
  border: 1px solid black;
  margin: 0 20px;
  cursor: pointer;

  &--rotate {
    transform: rotate(180deg);
  }

  &--bgPink {
    background: pink;
  }

  &--borderRadius {
    border-radius: 50%;
  }
}
.colorBlock {
  padding: 0 8px;
  margin: 0 2px;
  border-radius: 4px;
  text-align: center;

  &01 {
    @extend .colorBlock;
    color: white;
    background: orangered;
  }
  &02 {
    @extend .colorBlock;
    color: white;
    background: rgb(99, 231, 176);
  }
  &03 {
    @extend .colorBlock;
    color: white;
    background: rgb(190, 93, 255);
  }
  &04 {
    @extend .colorBlock;
    color: white;
    background: rgb(255, 0, 98);
  }
}

</style>
