<template>
    <div>
      <p>Child: {{childText}}</p>
      <input type="text" v-model="childText"
      @keydown.enter="$emit('changeChildValue', childText)">
      <!-- @keydown.enter="setChildText" -->
      <br><br>
    </div>
</template>
<script>
export default {
  name: 'child',
  props: {
    parentText: String,
  },
  data() {
    return {
      childText: this.parentText || '沒有東西傳過來',
    };
  },
  methods: {
    // setChildText() {
    //   this.$emit('changeChildValue', this.childText);
    // },
  },
  watch: {
    parentText(value) {
      this.childText = value;
    },
  },
};
</script>
<style lang="scss">

</style>
