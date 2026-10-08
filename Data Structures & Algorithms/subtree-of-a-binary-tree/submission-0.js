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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let s1 = []
        let s2 = []

        this.serialize(root, s1)
        this.serialize(subRoot, s2)

        const str1 = s1.join('')
        const str2 = s2.join('')

        return str1.includes(str2)
    }

    serialize(node, arr) {
        if(!node) {
            arr.push('#n')
            return
        }

        arr.push(`#${node.val}`)
        this.serialize(node.left, arr)
        this.serialize(node.right, arr)
    }
}
