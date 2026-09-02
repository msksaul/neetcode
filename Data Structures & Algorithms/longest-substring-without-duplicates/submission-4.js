class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let len = 0
        const hash = new Map()
        let i = 0
        
        for(let j=0; j<s.length; j++) {
            if(!hash.has(s[j])) {
                hash.set(s[j], j)
                len = Math.max(len, j-i+1)
            }
            else {
                const idx = hash.get(s[j])
                for(let k=i; k<=idx; k++) {
                    hash.delete(s[k])
                }
                i = idx+1
                hash.set(s[j], j)
            }
        }
        
        return len
    }
}
