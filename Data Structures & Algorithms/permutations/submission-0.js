class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let ans = []
        let sol = []
        const n = nums.length

        const backtrack = () => {
            if(sol.length == n) {
                ans.push([...sol])
                return
            }

            for(const d of nums) {
                if(sol.indexOf(d) == -1) {
                    sol.push(d)
                    backtrack()
                    sol.pop()
                }
            }
        }

        backtrack()

        return ans
    }
}
