<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      <ol>
        <li v-for="item in result" :key="item.id">
          {{ item }}
        </li>
      </ol>
    </div>

  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs},
})
export default class Statistics extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  get result() {
    const {recordList} = this;
    const hashTable = {};
    for (let i = 0; i <=  recordList.length; i++) {

    }
   }

  created() {
    this.$store.commit('fetchRecords');
    console.log(this.recordList);
  }


  type = '-';
  interval = 'daily';

  recordTypeList = recordTypeList;
  intervalList = intervalList;
};
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}

::v-deep .interval-tabs-item {
  height: 48px;
}
</style>