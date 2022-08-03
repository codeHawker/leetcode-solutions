/**
 * Leetcode - 235. Lowest Common Ancestor of a Binary Search Tree
 * 
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * 
 * Given a binary search tree (BST), find the lowest common ancestor 
 * (LCA) node of two given nodes in the BST.
 * 
 * According to the definition of LCA on Wikipedia: “The lowest common 
 * ancestor is defined between two nodes p and q as the lowest node 
 * in T that has both p and q as descendants (where we allow a node 
 * to be a descendant of itself).”
 * 
**/


import TreeNode from "./TreeNode"

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // are p & q subtrees of root.left
    if(root?.left && isSubtree(root.left, p) && isSubtree(root.left, q)){
        return lowestCommonAncestor(root.left, p, q)
    }
    // are p & q subtrees of root.right
    else if(root?.right && isSubtree(root.right, p) && isSubtree(root.right, q)){
        return lowestCommonAncestor(root.right, p, q)
    }
    // else return root
    else{
        return root
    }
};

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
    if(subRoot === null){
        return true
    }
    else if (!(root && subRoot)) {
        return root === subRoot
    }
    else if(root.val === subRoot.val && isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)){
        return true
    }
    else{
        return false
    }
};

export default lowestCommonAncestor;