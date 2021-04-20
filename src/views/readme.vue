<template>
  <div class="content">
    <div class="readme">
      <h1 class="noteTitle">Vue Note</h1>
      <p>僅作為個人學習vue的筆記, 試寫一些vue相關的功能......</p>
    </div>
    <!-- <div class="content__rightBlock"></div> -->
  </div>
</template>
<script>
export default {
  name: 'readme',
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
.readme {
  width: 100%;
  padding: 150px 150px;
  // align-items: center;
}
</style>
