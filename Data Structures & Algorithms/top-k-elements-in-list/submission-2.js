class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = new Map()
    
        for(const num of nums) {       
            if(hash.has(num)) {
                hash.set(num, hash.get(num)+1)
            }
            else {
                hash.set(num, 1)
            }
        }
        
        return [...hash.entries()].sort((a,b) => b[1]-a[1]).slice(0,k).map(p =>p[0])
    }
}
