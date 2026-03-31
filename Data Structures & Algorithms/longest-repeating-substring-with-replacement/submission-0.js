class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0
        let freq = new Array(26).fill(0)
        let longest = 0

        for(let r=0; r<s.length; r++){
            freq[s[r].charCodeAt(0)-65]++
            while(r-l+1-Math.max(...freq) > k) {
                freq[s[l].charCodeAt(0)-65]--
                l++
            }
            longest = Math.max(longest, r-l+1)
        }

        return longest
    }
}
