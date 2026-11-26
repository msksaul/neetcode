class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const n = s.length
        let ans = []

        const isPalindrome = (str) => {
            let L = 0
            let R = str.length-1
            
            while(L<R) {
                if(str[L]!==str[R]) return false
                L++
                R--
            }
            
            return true
        }

        const backtrack = (start, sol) => {
            if(start == n) {
                ans.push(sol)
                return
            }

            for(let i=start; i<=n; i++) {
                let sub = s.slice(start, i+1)
                if(isPalindrome(sub)) {
                    backtrack(i+1, [...sol, sub])
                }
            }
        }

        backtrack(0, [])

        return ans
    }
}
