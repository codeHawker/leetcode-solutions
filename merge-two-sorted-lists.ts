/**
 * Leetcode - 21. Merge Two Sorted Lists
 * 
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * 
 * You are given the heads of two sorted linked lists 
 * list1 and list2.
 * 
 * Merge the two lists in a one sorted list. The list 
 * should be made by splicing together the nodes of the 
 * first two lists.
 * 
 * Return the head of the merged linked list.
 * 
**/

import ListNode from "./ListNode";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let list3: ListNode | null = null;

    while (list1 !== null) {
        if (list2 !== null && (list2.val < list1.val)) {
            list3 = new ListNode(list2.val, list3);
            list2 = list2.next;
        }
        else {
            list3 = new ListNode(list1.val, list3);
            list1 = list1.next;
        }
    }
    while (list2) {
        list3 = new ListNode(list2.val, list3)
        list2 = list2.next
    }

    return reverseList(list3)
};

function reverseList(head: ListNode | null): ListNode | null {
    let tail: ListNode | null = null;
    while (head !== null) {
        tail = new ListNode(head.val, tail);
        head = head.next
    }
    return tail
};

export default mergeTwoLists;