class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let subs = []
        let sol = []

        const backtrack = (i) => {
            if(i==nums.length) {
                subs.push([...sol])
                return
            }

            backtrack(i+1)

            sol.push(nums[i])
            backtrack(i+1)
            sol.pop()
        }

        backtrack(0)

        return subs
    }
}
