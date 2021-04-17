<template>
    <div>
      <input type="text" v-model="text">
    </div>
</template>
<script>
export default {
  name: 'child',
  props: {
    text: String,
  },
};
</script>
<style lang="scss">

</style>
