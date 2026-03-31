class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length
        let l_arr = []
        let r_arr = []
        let l_mult = 1
        let r_mult = 1
        let ans = new Array(len).fill(0)

        for(let i=0; i<len; i++) {
            const j = len-i-1
            l_arr[i] = l_mult
            r_arr[j] = r_mult
            l_mult *= nums[i]
            r_mult *= nums[j]
        }

        for(let i=0; i<len; i++) {
            ans[i] = l_arr[i] * r_arr[i]
        }

        return ans
    }
}
