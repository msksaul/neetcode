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
    isValidBST(root) {
        
        const dfs = (node, down, up) => {
            if(!node) return true

            if(down >= node.val || up <= node.val) {
                return false
            }

            return dfs(node.left, down, node.val) && dfs(node.right, node.val, up)
        }

        return dfs(root, -Infinity, Infinity)
    }
}
