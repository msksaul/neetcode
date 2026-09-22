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
        let fast = head
        let slow = head

        while(fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        
        let prev = null
        let curr = slow.next
        slow.next = null

        while(curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }

        let front = head
        let back = prev
        
        while(front && back) {
            let temp1 = front.next
            let temp2 = back.next

            front.next = back
            back.next = temp1

            front = temp1
            back = temp2
        }

        return head
    }
}
