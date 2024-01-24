import { ITreeNode, IInnerTreeNode } from './tree-type';
export const generateInnerTree = (tree: ITreeNode[]): IInnerTreeNode[] => {
  return tree.reduce((prev, cur) => {
    const o = { ...cur } as IInnerTreeNode;
    if (o.children) {
      return prev.concat(o, generateInnerTree(o.children));
    } else {
      return prev.concat(o);
    }
  }, [] as IInnerTreeNode[]);
};
