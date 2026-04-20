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
     * @return {void}
     */
    reorderList(head) {
        if(!head.next || !head.next.next) return

        let mid = head
        let fast = head

        while(fast.next && fast.next.next) {
            mid = mid.next
            fast = fast.next.next
        }

        let curr = mid.next
        mid.next = null

        let p2 = null
        while(curr) {
            let temp = curr.next
            curr.next = p2
            p2 = curr
            curr = temp
        }

        let p1 = head
        while(p2) {
            let t1 = p1.next
            let t2 = p2.next
            p1.next = p2
            p2.next = t1
            p1 = t1
            p2 = t2
        }
    }
}
