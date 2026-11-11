class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums = nums.sort((a,b) => a-b)
        let ans = [[]]
        
        for(const n of nums) {
            let temp = []
            for(const a of ans) {
                temp.push([...a, n])
            }
            ans.push(...temp)
        }
        
        const seen = new Set()
        
        return ans.filter(item => {
        const key = JSON.stringify(item);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
        })
    }
}
