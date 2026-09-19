/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode()
        let curr = dummy

        while(list1 && list2) {
            if(list1.val < list2.val) {
                curr.next=list1
                curr = list1
                list1 = list1.next
            }
            else {
                curr.next=list2
                curr = list2
                list2 = list2.next
            }
        }

        if(list1) {
            curr.next = list1
        }
        else {
            curr.next = list2
        }

        return dummy.next
    }
}
