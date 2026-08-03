class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = new Map()

        for(let i=0; i<nums.length; i++) {
            const num = target-nums[i]
            if(hash.has(num)) {
                return [hash.get(num), i]
            }
            hash.set(nums[i], i)

        }
    }
}
