/**
 * Leetcode - 226. Invert Binary Tree
 * 
 * https://leetcode.com/problems/invert-binary-tree/
 * 
 * Given the root of a binary tree, invert the tree,
 *  and return its root.
**/


import TreeNode from "./TreeNode";

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return null
    }
    else {
        let newLeft: TreeNode | null = root.right ? invertTree(root.right) : null
        let newRight: TreeNode | null = root.left ? invertTree(root.left) : null
        return new TreeNode(root.val, newLeft, newRight);
    };
};

export default invertTree;