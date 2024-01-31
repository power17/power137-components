import { defineComponent, toRefs, ref, computed } from 'vue';
import { IInnerTreeNode, TreeProps, treeProps } from './tree-type';
import { generateInnerTree } from './utils';
export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props);
    const innerData = ref(generateInnerTree(data.value));
    // 获取指定节点的子节点
    const getChildren = (node: IInnerTreeNode): IInnerTreeNode[] => {
      const result = []; // 找到传入节点在列表中的索引
      const startIndex = innerData.value.findIndex(
        (item) => item.id === node.id
      ); // 找到它后面所有的子节点(level比指定节点大)
      for (
        let i = startIndex + 1;
        i < innerData.value.length && node.level < innerData.value[i].level;
        i++
      ) {
        result.push(innerData.value[i]);
      }
      return result;
    };
    const toggleNode = (node: IInnerTreeNode) => {
      const cur = innerData.value.find((item) => item.id === node.id);
      if (cur) cur.expanded = !cur.expanded;
    };
    const getExpandedTree = computed(() => {
      const result: IInnerTreeNode[] = [];
      let excludeNodes: IInnerTreeNode[] = [];
      innerData.value.forEach((item) => {
        if (!excludeNodes.some((node) => node.id === item.id)) {
          if (!item.expanded) {
            excludeNodes = getChildren(item);
          }
          result.push(item);
        }
      });
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
