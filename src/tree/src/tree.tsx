import { defineComponent, toRefs, ref, computed } from 'vue';
import { IInnerTreeNode, TreeProps, treeProps } from './tree-type';
import { generateInnerTree } from './utils';
export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props);
    const innerData = ref(generateInnerTree(data.value));
    const toggleNode = (node: IInnerTreeNode) => {};
    const getExpandedTree = computed(() => {
      const result: IInnerTreeNode[] = [];
      console.log(innerData.value);
      innerData.value.map((item) => item.expanded);
      return result;
    });
    return () => {
      return (
        <div class="s-tree">
          {getExpandedTree.value.map((tree) => (
            <div
              style={{
                paddingLeft: `${24 * (tree.level - 1)}px`,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {tree.isLeaf ? (
                <span
                  style={{
                    display: 'iinline-block',
                    width: '25px'
                  }}
                ></span>
              ) : (
                <svg
                  onClick={() => {
                    toggleNode(tree);
                  }}
                  style={{
                    display: 'inline-block',
                    width: '25px',
                    height: '16px',
                    transform: tree.expanded ? 'rotate(90deg)' : ''
                  }}
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M384 192v640l384-320.064z"
                  ></path>
                </svg>
              )}
              {tree.label}
            </div>
          ))}
        </div>
      );
    };
  }
});
