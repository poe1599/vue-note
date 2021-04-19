<template>
  <div class="content">
    <div class="content__leftBlock">
      <h1 class="noteTitle">LifeCycle</h1> <span class="vueKey"></span>
      <ul class="noteList" style="margin-left:30px;">
        <li>
          在<span class="vueKey">beforeCreate</span>階段, <span class="vueKey">data</span>
          還沒有被建立, 直到<span class="vueKey">created</span>
        </li>
        <li>
          非同步掛載資料至少要等到<span class="vueKey">created</span>才執行
        </li>
        <li><span class="vueKey">mounted</span>時dom元素已經掛載在頁面</li>
        <li>
          想要保留元件內部的<span class="vueKey">data</span>不被重置, 可在父元件使用
          <span class="vueKey">keep-alive</span>包覆子元件
        </li>
        <li>
          使用<span class="vueKey">keep-alive</span>的子元件, 才能觸發
          <span class="vueKey">activated</span>與<span class="vueKey">deactivated</span>
        </li>
        <li>
          使用<span class="vueKey">keep-alive</span>的子元件,
          <span class="vueKey">beforeDestroy</span> / <span class="vueKey">destroyed</span>
          會被替換而不被觸發, 改成觸發<span class="vueKey">deactivated</span>
        </li>
        <li>
          使用<span class="vueKey">keep-alive</span>的子元件, 觸發
          <span class="vueKey">deactivated</span>之後, 再次渲染時會跳過
          <span class="vueKey">beforeCreate</span> / <span class="vueKey">created</span> /
          <span class="vueKey">beforeMount</span> / <span class="vueKey">mounted</span>,
          直接執行<span class="vueKey">activated</span>
        </li>
        <img src="/img/LifeCycleRender.png" alt="" width="100%" srcset="">
      </ul>
    </div>
    <div class="content__rightBlock">
      <div class="diplayGroup">
        <ul class="noteList" style="margin-left:30px;">
          <li><span class="vueKey">beforeCreate</span> / <span class="vueKey">created</span></li>
          <li><span class="vueKey">beforeMount</span> / <span class="vueKey">mounted</span></li>
          <li><span class="vueKey">beforeUpdate</span> / <span class="vueKey">updated</span></li>
          <li><span class="vueKey">activated</span> / <span class="vueKey">deactivated</span></li>
          <li><span class="vueKey">beforeDestroy</span> / <span class="vueKey">destroyed</span></li>
        </ul>
      </div>
      <div class="displayGroup">
        <button @click="isRender1=!isRender1">渲染 / 移除</button>
        沒有使用keep-alive <br><br>
        <LifeCycleComponent v-if="isRender1"/>
      </div>
      <div class="displayGroup">
        <button @click="isRender2=!isRender2">渲染 / 移除</button>
        使用keep-alive <br><br>
        <keep-alive>
          <LifeCycleComponent v-if="isRender2"/>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import LifeCycleComponent from '@/components/LifeCycleComponent.vue';

export default {
  name: 'LifeCycle',
  data() {
    return {
      isRender1: false,
      isRender2: false,
    };
  },
  components: {
    LifeCycleComponent,
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
