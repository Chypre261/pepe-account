<template>
  <nav>

    <router-link to="/labels" class="item" active-class="selected">

      Label
    </router-link>

    <router-link to="/money" class="item" active-class="selected">

      Add
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">

      Statistics
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
    font-size: 12px;
    > .item {
      padding: 3px;
      width: 33.33333%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &.selected {
        color: green;
      }
      .icon {
        width: 3em;
        height: 3em;
      }
    }
  }
</style>