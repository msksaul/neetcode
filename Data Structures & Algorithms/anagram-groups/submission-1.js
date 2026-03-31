class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const keys = new Map()

        const gkey = (str) => {
            let al = new Array(26).fill(0)
            for(const c of str) {
                al[c.charCodeAt(0)-97]++
            }
            return al.join('/')
        }
        
        for(const s of strs) {
        const k = gkey(s)
        if(!keys.has(k)) {
            keys.set(k, [s])
        }
        else {
            const prev = keys.get(k)
            keys.set(k, [...prev,s])
            }
        }
    
        return [...keys.values()]   
    }
}
