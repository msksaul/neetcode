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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        let ans = []
        let stack = []

        stack.push(root)

        while(stack.length>0) {
            let level = []
            const n = stack.length

            for(let i=0; i<n; i++) {
                let node = stack.shift()

                level.push(node.val)

                if(node.left) stack.push(node.left)
                if(node.right) stack.push(node.right)
            }

            ans.push(level)
        }

        return ans
    }
}
