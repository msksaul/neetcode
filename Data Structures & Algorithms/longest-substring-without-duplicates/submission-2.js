class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l=0
        let l_width = 0
        const hash= new Map()

        for(let r=0; r<s.length; r++) {
            while(hash.has(s[r])) {
                hash.delete(s[l])
                l++
            }

            l_width = Math.max(l_width, r-l+1)
            hash.set(s[r], true)
        }

        return l_width
    }
}
