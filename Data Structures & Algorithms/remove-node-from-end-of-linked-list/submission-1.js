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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head)
        let first = dummy
        let second = head

        for(let i=0; i<n; i++) {
            second = second.next
        }

        while(second) {
            first = first.next
            second = second.next
        }

        let temp = first.next.next
        first.next = temp

        return dummy.next
    }
}
