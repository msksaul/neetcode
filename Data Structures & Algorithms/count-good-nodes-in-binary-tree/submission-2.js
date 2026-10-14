/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let count = 0

        const dfs = (node, carry) => {
            if(!node) return

            if(node.val >= root.val && carry <= node.val) count += 1
            
            carry = Math.max(carry, node.val)

            dfs(node.left, carry)
            dfs(node.right, carry)
        }

        dfs(root, root.val)

        return count
    }
}
