class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let l_mult = 1
        let r_mult = 1
        
        let L = new Array(nums.length).fill(1)
        let R = new Array(nums.length).fill(1)
        let ans = new Array(nums.length).fill(1)
        
        for(let i=0; i<nums.length; i++) {
            let j = nums.length-i-1
            L[i] = l_mult
            R[j] = r_mult
            l_mult = l_mult*nums[i]
            r_mult = r_mult*nums[j]
        }
    
        for(let i=0; i<nums.length; i++) {
            ans[i] = L[i]*R[i]
        }
    
        return ans
    }
}
