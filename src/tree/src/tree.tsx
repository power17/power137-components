import { defineComponent, toRefs } from 'vue';
import { TreeProps, treeProps } from './tree-type';
import { generateInnerTree } from './utils';
export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props);
    const innerData = generateInnerTree(data.value);
    console.log(innerData);
    return () => {
      return (
        <div class="s-tree">{innerData.map((tree) => tree.label + '   ')}</div>
      );
    };
  }
});
