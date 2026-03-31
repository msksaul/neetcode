class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let l = 0
        let ans = [Infinity, 0, 0]
        let kt = new Map()
        let ks = new Map()

        for(const char of t) {
            kt.set(char, (kt.get(char)||0) + 1)
        }

        let formed = 0
        let required = kt.size

        for(let r=0; r<s.length; r++) {
            const char = s[r]
            ks.set(char, (ks.get(char)||0) + 1)

            if(kt.has(char) && ks.get(char) == kt.get(char)) {
                formed++
            }

            while(required == formed) {
                if(r-l+1 < ans[0]) {
                    ans = [r-l+1, l , r]
                }

                const lchar = s[l]
                ks.set(lchar, ks.get(lchar)-1)
                if(kt.has(lchar) && ks.get(lchar) < kt.get(lchar)) {
                    formed--
                }
                l++
            }
        }

        return ans[0] == Infinity ? '' : s.slice(ans[1], ans[2] + 1)
    }
}
