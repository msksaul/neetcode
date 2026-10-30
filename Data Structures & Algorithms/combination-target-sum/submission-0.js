class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = []
        let sol = []

        const backtrack = (i, sum) => {
            if(sum == target) {
                res.push([...sol])
                return
            }
            if(sum > target || i == nums.length) return

            backtrack(i+1, sum)
            sol.push(nums[i])
            backtrack(i, sum + nums[i])
            sol.pop()
        }

        backtrack(0, 0)

        return res
    }
}
