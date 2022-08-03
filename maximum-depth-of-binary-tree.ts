/**
 * Leetcode - 104 Maximum Depth of Binary Tree
 * 
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * 
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along 
 * the longest path from the root node down to the farthest leaf node.
 * 
 */

import TreeNode from "./TreeNode"

function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    else {
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    }
};

export default maxDepth;