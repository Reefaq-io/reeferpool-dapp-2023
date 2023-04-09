<!-- eslint-disable vue/no-bare-strings-in-template -->
<template>
  <footer :class="b()">
    <div :class="b('inner')">
      <a href=""
         target="_blank"
         rel="noopener noreferrer"
      >
        <img src="@/assets/reefaq-logo.svg" width="150" alt="Reefaq.io">
      </a>
      <nav :class="b('navigation')">
        <ul>
          <li>
            <router-link to="#">
              Terms of use
            </router-link>
          </li>
          <li>
            <router-link to="#">
              Contact Us
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'c-footer',

    // components: {},

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
  @use '@/setup/scss/mixins';
  @use '@/setup/scss/variables';

  .c-footer {
    padding: variables.$spacing--10 0;
    background: variables.$color-reef-grayscale--strong;

    &__inner {
      @include mixins.container;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__navigation {
      display: flex;
      gap: variables.$spacing--20;
      align-items: center;

      ul {
        display: flex;
        gap: variables.$spacing--20;
        margin: 0;
        padding: 0;
        list-style: none;
      }
    }
  }
</style>
