import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('请输入标签');
    if (!name) window.alert('不能为空');
    this.$store.commit('createTag', name);
    if (this.$store.state.createTagError) {
      window.alert(this.$store.state.createTagError);
    }
  }
}

export default TagHelper;