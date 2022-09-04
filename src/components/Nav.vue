<template>
  <div class="nav">

    <router-link to="/labels">
      <Icon name="labels" />
      Labels
    </router-link>

    <router-link to="/money">
      <Icon name="money" />
      Input
    </router-link>

    <router-link to="/statistics">
      <Icon name="statistics" />
      Statistics
    </router-link>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  .nav {
    border: 1px solid red;
  }
</style>