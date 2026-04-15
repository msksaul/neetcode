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
        let merged = new ListNode()
        let iterator = merged

        while(list1 && list2) {
            if(list1.val < list2.val) {
                iterator.next = list1
                list1 = list1.next
            }
            else {
                iterator.next = list2
                list2 = list2.next
            }
            iterator = iterator.next
        }

        iterator.next = list1 ? list1 : list2

        return merged.next
    }
}
