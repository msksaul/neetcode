class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let enc = ''
        for(const str of strs) {
            enc += str.length + 'π' + str
        }
        return enc
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let dec = []
        let i = 0
        while(i<str.length) {
            let j=i
            while(str[j] != 'π') {
            j++
            }
            const length = Number(str.slice(i,j))
            dec.push(str.slice(j+1, j+1+length))
            i = j+length+1
        }
        return dec
    }
}
