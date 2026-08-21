class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ''
        for(const s of strs) {
            const l = s.length
            str += l + '#' + s
        }
        return str
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let sol = []
        for(let i=0; i<str.length; i++) {
            let l = ''
            while(str[i]!='#') {
                l += str[i]
                i++
            }
            sol.push(str.slice(i+1, i+1+Number(l)))
            i+=Number(l)
        }
        return sol
    }
}
