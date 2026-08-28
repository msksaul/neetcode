class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let starts = []
        let max = 0
        const hash = new Map()

        for(const n of nums) {
            if(!hash.has(n)) {
                hash.set(n, true)
            }
        }
    
        for(const [key, value] of hash) {
            if(!hash.has(key-1)) {
                starts.push(key)
            }
        }
    
        for(const s of starts) {
            let count = 0
            let num = s
            while(hash.has(num)) {
                count++
                num++
            }
        
            max = Math.max(max, count)
        }
    
        return max
        }
}
