<template>
  <div :class="b()">
    <c-price-prediction />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import cPricePrediction from '@/components/c-price-prediction.vue';

  export default defineComponent({
    name: 'r-sandbox',
    components: {
      cPricePrediction,
    },

    // props: {},
    // data() {
    //   return {};
    // },

    // computed: {},
    // watch: {},

    // beforeCreate() {},
    // created() {},
    // beforeMount() {},
    // mounted() {},
    // beforeUpdate() {},
    // updated() {},
    // activated() {},
    // deactivated() {},
    // beforeUnmount() {},
    // unmounted() {},

    // methods: {},
    // render() {},
  });
</script>

<style lang="scss">
  .r-price-predction {
    // Add specific styles.
  }
</style>
