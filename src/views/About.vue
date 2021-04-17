<template>
  <div class="about">
    <h1>This is an about page</h1>
    <child :text="text" />
    <h1>{{text}}</h1>
  </div>
</template>
<script>
import Child from '@/components/Child.vue';

export default {
  name: 'about',
  data() {
    return {
      text: 'HA',
    };
  },
  components: {
    Child,
  },
};
</script>
