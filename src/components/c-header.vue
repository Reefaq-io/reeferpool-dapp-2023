<!-- eslint-disable vue/no-bare-strings-in-template -->
<template>
  <header :class="b()">
    <div :class="b('inner')">
      <a :class="b('')"
         href=""
         target="_blank"
         rel="noopener noreferrer"
      >
        <img src="@/assets/reefer-pool-logo.svg" width="200" alt="Reeferpool">
      </a>
    
      <div :class="b('navigation')">
        <nav>
          <router-link to="#">
            How it works
          </router-link>
        </nav>
        <e-button :class="b('button-connect')"
                  type="primary"
        >
          <e-icon icon="i-wallet" size="15" />
          Connect Wallet
        </e-button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import eButton from '@/elements/e-button.vue';
  import eIcon from '@/elements/e-icon.vue';

  export default defineComponent({
    name: 'c-header',

    components: {
      eButton,
      eIcon,
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
  @use '@/setup/scss/mixins';
  @use '@/setup/scss/variables';

  .c-header {
    padding: variables.$spacing--5 0;
    background: variables.$color-reef-grayscale--strong;

    &__inner {
      @include mixins.container;

      display: flex;
      justify-content: space-between;
    }

    &__navigation {
      display: flex;
      gap: variables.$spacing--20;
      justify-content: space-between;
      align-items: center;
    }

    &__button-connect .e-icon {
      margin-right: variables.$spacing--10;
    }
  }
</style>
