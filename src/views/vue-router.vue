<template>
  <div class="content">
    <div class="content__leftBlock">
      <h1 class="noteTitle">Vue Router</h1>
      <ul class="noteList">
        <li>
          /src/router/index.js 定義路由
        </li>
        <li>
          import Vue from 'vue';<br>
          import VueRouter from 'vuerouter';
        </li>
        <li>
          import對應的元件
        </li>
        <li>
          Vue.use(VueRouter);
        </li>
        <li>
          定義routes 陣列, 陣列中每一個物件均為一支路由, 也可以藉由children定義巢狀路由 <br>
          <a href="https://router.vuejs.org/zh/api/#routes">routes參數</a><br>
          const routes = [ <br>
          {<br>
          path: '/routerPath',<br>
          name: 'name',<br>
          component: ImportName,<br>
          },<br>
          // 巢狀路由 children <br>
          {<br>
          path: '/productType',<br>
          name: 'productType',<br>
          component: ProductType,<br>
          children: [<br>
          {<br>
          path: '/itemA',<br>
          name: 'itemA',<br>
          component: itemA,<br>
          },<br>
          {<br>
          path: '/itemB',<br>
          name: 'itemB',<br>
          component: ItemB,<br>
          },<br>
          ] <br>
          },<br>
          ]
        </li>
        <li>使用 router-link to="/xxx" 來取代a連結</li>
        <li>頁面元件則會插入在router-view</li>
        <li><a href="https://book.vue.tw/CH4/4-1-vue-router-intro.html">Vue Router 與前後端路由</a></li>
        <li><a href="https://router.vuejs.org/zh/api/#router-link">Vue Router官方api</a></li>
      </ul>
    </div>
    <div class="content__rightBlock"></div>
  </div>
</template>
<script>
export default {
  name: 'content',
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
