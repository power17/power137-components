import { ITreeNode, IInnerTreeNode } from './tree-type';
export const generateInnerTree = (
  tree: ITreeNode[],
  level = 0,
  parentNode = {} as IInnerTreeNode
): IInnerTreeNode[] => {
  level++;
  return tree.reduce((prev, cur) => {
    const o = { ...cur } as IInnerTreeNode;
    o.level = level;
    // 如果层级比父节点层级高则是子级，设置父级parentId
    if (level > 1 && parentNode.level && level > parentNode.level) {
      o.parentId = parentNode.id;
    }
    if (o.children) {
      const children = generateInnerTree(o.children, level, parentNode);
      delete o.children;
      return prev.concat(o, children);
    } else {
      o.isLeaf = true;
      return prev.concat(o);
    }
  }, [] as IInnerTreeNode[]);
};
