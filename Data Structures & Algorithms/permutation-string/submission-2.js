class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length>s2.length) return false
        let k1 = new Array(26).fill(0)
        let k2 = new Array(26).fill(0)
        
        for(let i=0; i<s1.length; i++) {
            k1[s1[i].charCodeAt(0)-97]++
            k2[s2[i].charCodeAt(0)-97]++
        }
        k1 = k1.join('#')
        if(k2.join('#')==k1) return true
    
        for(let i=1; i<=(s2.length-s1.length); i++) {
            k2[s2[i-1].charCodeAt(0)-97]--
            k2[s2[i+s1.length-1].charCodeAt(0)-97]++
            if(k2.join('#')==k1) return true
        }
        return false
    }
}
