// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const old_map = new Map()
        let curr = head

        while(curr) {
            old_map.set(curr, new Node(curr.val))
            curr = curr.next
        }

        curr = head

        while(curr) {
            let node = old_map.get(curr)
            node.next = old_map.get(curr.next) || null
            node.random = old_map.get(curr.random) || null

            curr = curr.next
        }

        return old_map.get(head) ?? null
    }
}
