/**
 * Leetcode - 100. Same Tree
 * 
 * https://leetcode.com/problems/same-tree/
 * 
 * Given the roots of two binary trees p and q, write 
 * a function to check if they are the same or not.
 * 
 * Two binary trees are considered the same if they are
 * structurally identical, and the nodes have the same 
 * value.
 * 
**/


import TreeNode from "./TreeNode"

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    //Check tree base
    if (p === null && q === null) {
        return true
    }
    else if (p === null || q === null) {
        return false
    }
    else if (p.val === q.val) {
        if (!isSameTree(p.left, q.left)) {
            return false
        }
        else if (!isSameTree(p.right, q.right)) {
            return false
        }
        else {
            return true
        }
    } else {
        return false
    }
};

export default isSameTree;