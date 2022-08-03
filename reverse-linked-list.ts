/** 
 * Leetcode - 206 Reverse Linked List
 * 
 * https://leetcode.com/problems/reverse-linked-list/
 * 
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 */ 


import ListNode from "./ListNode"

// First solution using a recursive approach

function reverseList(head: ListNode | null): ListNode | null {
    if(head){
        return buildInRev(null, head)
    }
    else return head
};


function buildInRev(tail: ListNode | null, head:ListNode): ListNode {
    if(head.next){
        return buildInRev(new ListNode(head.val, tail), head.next)
    }
    else return(new ListNode(head.val, tail))
}


//Second solution using a iterative approach

function reverseListIterative(head: ListNode | null): ListNode | null {
    let tail: ListNode | null = null;
    while(head!== null){
        tail = new ListNode(head.val, tail);
        head = head.next
    }
    return tail
};

export default {reverseList, reverseListIterative};