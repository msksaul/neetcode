class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let len = 0
        let i = 0
        let freqs = new Array(26).fill(0)
        
        for(let j=0; j<s.length; j++) {
            freqs[s[j].charCodeAt(0)-65]++
            const isValid = (j-i+1)-Math.max(...freqs) <= k
            
            if(isValid) {
                len = Math.max(len, j-i+1)
            }
            else {
                freqs[s[i].charCodeAt(0)-65]--
                i++
            }
        }

        return len 
    }
}
