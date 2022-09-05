<template>
  <Layout>

    <ul class="class">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new">
      新建标签
    </div>
    <div class="note">
      <label class="name">备注
        <input type="text">
      </label>
    </div>
    <div>
      <ul>
        <li>支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>OK</button>
      <button>0</button>
    </div>
  </Layout>
</template>

<script lang="ts">
  export default {
    name: 'Money',
  };
</script>

<style lang="scss" scoped>

</style>