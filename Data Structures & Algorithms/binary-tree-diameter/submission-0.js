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
    diameterOfBinaryTree(root) {
        let diameter = 0

        const height = (node) => {
            if(!node) return 0

            let l_height = height(node.left)
            let r_height = height(node.right)

            diameter = Math.max(diameter, l_height + r_height)

            return Math.max(l_height, r_height) + 1
        }

        height(root)

        return diameter
    }
}
