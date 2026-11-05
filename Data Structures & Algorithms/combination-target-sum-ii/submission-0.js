class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates = candidates.sort((a,b) => a-b)
        let res = []

        const comb = (curr, start, target) => {
            if(target == 0) {
                res.push(curr)
                return
            }

            for(let i=start; i<candidates.length; i++) {
                if(i > start && candidates[i] == candidates[i-1]) {
                    continue
                }
                if(candidates[i] > target) {
                    break
                }
                comb([...curr, candidates[i]], i+1, target - candidates[i])
            }
            return
        }

        comb([], 0, target)
        return res 
    }
}
