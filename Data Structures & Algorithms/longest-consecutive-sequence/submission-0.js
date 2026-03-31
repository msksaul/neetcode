class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max_seq = 0
        let candidates = []
        const hash = new Set(nums)

        for(let i=0; i<nums.length; i++) {
            if(!hash.has(nums[i]-1)) {
                candidates.push(nums[i])
            }
        }

        for(const n of candidates) {
            let ref = n
            while(hash.has(ref)) {
                max_seq = Math.max(max_seq, ref-n+1)
                ref++
            }
        }

        return max_seq
    }
}
