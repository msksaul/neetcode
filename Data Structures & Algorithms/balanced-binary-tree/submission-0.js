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
     * @return {boolean}
     */
    isBalanced(root) {
        let balanced = true

        const height = (node) => {
            if(!node) return 0

            let l_height = height(node.left)
            let r_height = height(node.right)

            let diff = Math.abs(l_height - r_height)

            if(diff > 1) balanced = false

            return Math.max(l_height, r_height) + 1
        }

        height(root)

        return balanced
    }
}
