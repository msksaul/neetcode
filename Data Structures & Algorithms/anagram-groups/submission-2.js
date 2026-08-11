class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = new Map()

        const getKey = (str) => {
            let chars = new Array(26).fill(0)
            for(const s of str) {
                chars[s.charCodeAt(0)-97]++
            }

            return chars.join('/')
        }

        for(const s of strs) {
            const key = getKey(s)

            if(!hash.has(key)) {
                hash.set(key, [s])
            }
            else {
                const prev = hash.get(key)
                hash.set(key, [...prev, s])
            }
        }

        return [...hash.values()]
    }
}
