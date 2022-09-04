<template>
  <nav>

    <router-link to="/labels" class="item">
      <Icon name="labels" />
    </router-link>

    <router-link to="/money" class="item">
      <Icon name="money" />
    </router-link>

    <router-link to="/statistics" class="item">
      <Icon name="statistics" />
    </router-link>
  </nav>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
    > .item {
      width: 33.33333%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        width: 3em;
        height: 3em;
      }
    }
  }
</style>