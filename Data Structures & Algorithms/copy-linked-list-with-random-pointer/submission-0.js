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
        if(!head) return null

        let curr = head
        const hash = new Map()

        while(curr) {
            let node = new Node(curr.val)
            hash.set(curr, node)
            curr = curr.next
        }

        curr = head

        while(curr) {
            let node = hash.get(curr)
            node.next = hash.get(curr.next) ?? null
            node.random = hash.get(curr.random) ?? null
            curr = curr.next
        }

        return hash.get(head)
    }
}
