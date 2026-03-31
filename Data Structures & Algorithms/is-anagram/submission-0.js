class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length) return false

        const freq1 = new Map()
        const freq2 = new Map()

        for(const char of s) {
            const prev = freq1.get(char) || 0
            freq1.set(char, prev+1)

        }

        for(const char of t) {
            const prev = freq2.get(char) || 0
            freq2.set(char, prev+1)
        }

        for(const [key, value] of freq1) {
            if(freq2.get(key) != value) return false
        }

        return true
    }
}
