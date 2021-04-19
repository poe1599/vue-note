<template>
  <div class="LifeCycleComponent">
    <p>子元件: {{text}}</p><br>
    <input type="text" v-model="text">
  </div>
</template>
<script>
export default {
  name: 'LifeCycleComponent',
  data() {
    return {
      text: 'data的資料狀態',

    };
  },
  beforeCreate() {
    alert(`beforeCreate, data資料=${this.text}`);
  },
  created() {
    alert(`created, data資料=${this.text}`);
  },
  beforeMount() {
    alert(`beforeMount, data資料=${this.text}`);
  },
  mounted() {
    alert(`mounted, data資料=${this.text}`);
  },
  beforeUpdate() {
    console.log(`beforeUpdate, data資料=${this.text}`);
    alert(`beforeUpdate, data資料=${this.text}`);
  },
  updated() {
    console.log(`updated, data資料=${this.text}`);
    alert(`updated, data資料=${this.text}`);
  },
  activated() {
    alert(`activated, data資料=${this.text}`);
  },
  deactivated() {
    alert(`deactivated, data資料=${this.text}`);
  },
  beforeDestroy() {
    alert(`beforeDestroy, data資料=${this.text}`);
  },
  destroyed() {
    alert(`destroyed, data資料=${this.text}`);
  },
};
</script>
<style lang="scss" scoped>
.LifeCycleComponent {
  width: 100%;
  padding: 20px;
  background: rgb(24, 201, 83);
  text-align: center;

  input {
    width: 100%;
    height: 30px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid blue;
    outline: none;
  }
}
</style>
