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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode()
        let curr = dummy
        let carry = 0
        while(l1 || l2 || carry>0) {
            let v1 = l1 ? l1.val : 0
            let v2 = l2 ? l2.val : 0
            
            let num = v1 + v2 + carry
            carry = Math.trunc(num / 10)
            num = num%10

            curr.next = new ListNode(num)

            curr = curr.next
            l1 = l1 ? l1.next : null
            l2 = l2 ? l2.next : null
        }

        return dummy.next
    }
}
