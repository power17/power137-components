import { defineComponent, toRefs } from 'vue';
import { TreeProps, treeProps } from './tree-type';
import useTree from './composable/use-tree';
export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props);
    const { expandTree, toggleNode } = useTree(data.value);
    return () => {
      return (
        <div class="s-tree">
          {expandTree.value.map((tree) => (
            <div
              class="s-tree-node hover:bg-slate-300"
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
