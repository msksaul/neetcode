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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inorder_map = new Map()

        for(let i=0; i<inorder.length; i++) {
            inorder_map.set(inorder[i], i)
        }

        const helper = (pre_start, in_start, in_end) => {
            if(in_start > in_end) return null

            let root_val = preorder[pre_start]
            let root = new TreeNode(root_val)
            let in_index = inorder_map.get(root_val)
            let left_subtree_size = in_index - in_start

            root.left = helper(pre_start+1, in_start, in_index-1)
            root.right = helper(pre_start+1+left_subtree_size, in_index+1, in_end)

            return root
        }

        return helper(0, 0, inorder.length-1)
    }

}
