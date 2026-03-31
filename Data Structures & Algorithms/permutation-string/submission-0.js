class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length>s2.length) return false
        let fs1 = new Array(26).fill(0)
        
        for(const char of s1) {
            fs1[char.charCodeAt(0)-97]++
        }
        fs1 = fs1.join('#')
    
        for(let i=0; i<=s2.length-s1.length; i++) {
            let fs2 = new Array(26).fill(0)
            for(let j=i; j<i+s1.length; j++) {
                fs2[s2[j].charCodeAt(0)-97]++
            }
            if(fs1 == fs2.join('#')) return true
        }
    
        return false
    }
}
