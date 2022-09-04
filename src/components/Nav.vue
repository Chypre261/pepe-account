<template>
  <div class="nav">

    <router-link to="/labels">
      <svg>
        <use xlink:href="#labels"></use>
      </svg>
      Labels
    </router-link>
    |
    <router-link to="/money">
      <svg>
        <use xlink:href="#money"></use>
      </svg>
      Input
    </router-link>
    |
    <router-link to="/statistics">
      <svg>
        <use xlink:href="#statistics"></use>
      </svg>
      Statistics
    </router-link>
  </div>
</template>

<script lang="ts">
  import x from '@/assets/icons/labels.svg';
  import y from '@/assets/icons/money.svg';
  import z from '@/assets/icons/statistics.svg';

  console.log(x);
  console.log(y);
  console.log(z);

  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  .nav {
    border: 1px solid red;
  }
</style>