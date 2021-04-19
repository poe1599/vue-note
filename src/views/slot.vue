<template>
  <div class="content">
    <div class="content__leftBlock">
      <h1 class="noteTitle">slot</h1>
      <ul class="noteList" style="margin-left:30px;">
        <li>
          在父母元件, 對子女元件內層放入dom元素, 其dom元素會被渲染在子女元件的slot裡面
        </li>
        <li>
        在父母元件如要傳遞多個dom元素, 可在dom元素上加上slot="slot-name";
        子女元件的slot則加上name="slot-name", 即可做替換
        </li>
        <li>搭配template傳遞可以減少無謂的html元素</li>
        <li>在template上可以使用v-slot, v-slot只能在template上被使用</li>
        <li><a href="https://book.vue.tw/CH2/2-4-slots.html">slot插槽</a></li>
      </ul>
    </div>
    <div class="content__rightBlock"></div>
  </div>
</template>
<script>

export default {
  name: 'slot',
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
