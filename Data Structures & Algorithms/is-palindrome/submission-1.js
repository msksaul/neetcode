class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(!s) return false

        s = s.replace(/[^a-z0-9]/gi, '')
        s = s.toLowerCase()

        let L = 0
        let R = s.length-1

        while(L < R) {
            if(s[L] != s[R]) return false
            L++
            R--
        }

        return true
    }
}
