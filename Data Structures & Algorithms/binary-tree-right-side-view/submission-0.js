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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return []
        let ans = []
        let stack = []

        stack.push(root)

        while(stack.length>0) {
            let val = null
            const n = stack.length

            for(let i=0; i<n; i++) {
                let node = null
                if(i<n-1) {
                    node = stack.shift()
                    if(node.left) stack.push(node.left)
                    if(node.right) stack.push(node.right)
                    continue
                }
                node = stack.shift()

                val = node.val

                if(node.left) stack.push(node.left)
                if(node.right) stack.push(node.right)
            }
            ans.push(val)
        }

        return ans
    }
}
