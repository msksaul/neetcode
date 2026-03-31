class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = new Map()
        let ans = []

        for(const num of nums) {
            const prev = hash.get(num) || 0
            hash.set(num, prev+1)
        }

        for(const [key,value] of hash) {
            ans.push([key, value])
        }

        return ans.sort((a,b) => (b[1]-a[1])).slice(0,k).map(e => e[0])
    }
}
