/**
 * Leetcode - 572. Subtree of Another Tree
 * 
 * https://leetcode.com/problems/subtree-of-another-tree/
 * 
 * Given the roots of two binary trees root and subRoot, 
 * return true if there is a subtree of root with the same 
 * structure and node values of subRoot and false otherwise.
 * 
 * A subtree of a binary tree tree is a tree that consists 
 * of a node in tree and all of this node's descendants. The 
 * tree tree could also be considered as a subtree of itself.
 * 
**/

import TreeNode from "./TreeNode"


function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (isSameTree(root, subRoot)) {
        return true
    }
    else if (!root) {
        return false
    }
    else {
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
    };
};

function isSameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!(root && subRoot)) {
        return root === subRoot
    }
    else if(root.val === subRoot.val && isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)){
        return true
    }
    else{
        return false
    }
};

export default isSubtree;