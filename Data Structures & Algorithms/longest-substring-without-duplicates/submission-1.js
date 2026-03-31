class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let r=0
        let l=0
        let l_width = 0
        const hash= new Map()

        for(let i=0; i<s.length; i++) {
            if(!hash.has(s[i])) {
                hash.set(s[i],i)
                r = i
                l_width = Math.max(l_width, r-l+1)
            }
            else {
                const idx = hash.get(s[i])
                for(let j=l; j<=idx; j++) {
                    hash.delete(s[j])
                }
                hash.set(s[i], i)
                l = idx+1
            }
        }

        return l_width
    }
}
