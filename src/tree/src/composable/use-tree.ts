import { computed, ref, unref, Ref } from 'vue';
import { IInnerTreeNode, ITreeNode } from '../tree-type';
import { generateInnerTree } from '../utils';
export default function useTree(tree: ITreeNode[] | Ref<ITreeNode[]>) {
  const data = unref(tree);
  const innerData = ref(generateInnerTree(data));
  // 获取指定节点的子节点
  const getChildren = (node: IInnerTreeNode): IInnerTreeNode[] => {
    const result = [];
    const startIndex = innerData.value.findIndex((item) => item.id === node.id);
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
    if (cur) {
      cur.expanded = !cur.expanded;
    }
  };
  const expandTree = computed(() => {
    const result: IInnerTreeNode[] = [];
    let excludeNodes: IInnerTreeNode[] = [];
    innerData.value.forEach((item) => {
      // 是否是子节点
      if (!excludeNodes.some((node) => node.id === item.id)) {
        if (!item.expanded) {
          excludeNodes = getChildren(item);
        }
        result.push(item);
      }
    });
    return result;
  });
  return { toggleNode, expandTree };
}
