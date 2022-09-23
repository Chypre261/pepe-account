<template>
  <div>
    <label class="notes">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text"
             v-model="value"
             :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  value = '';

  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder!: string;

  onChange(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }

  @Watch('value')
  onValueChanged(val: string, oldVal: string) {
    this.$emit('update:value', val);
  }

};
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>