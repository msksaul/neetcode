class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false

        const sk = new Map()
        const tk = new Map()

        for(const char of s) {
            const val = sk.get(char) || 0
            sk.set(char, val+1)
        }

        for(const char of t) {
            const val = tk.get(char) || 0
            tk.set(char, val+1)
        }

        for(const [char, val] of sk) {
            if(tk.get(char) != val) return false
        }

        return true
    }                                               
}
