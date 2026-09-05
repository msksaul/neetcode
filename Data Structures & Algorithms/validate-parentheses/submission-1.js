class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        const pairs = {
            '}':'{',
            ']':'[',
            ')':'('
        }
        
        for(const b of s) {
            if(stack.length==0) {
                stack.push(b)
            }
            else if(pairs[b]==stack[stack.length-1]) {
                stack.pop()
            }
            else {
                stack.push(b)
            }
        }
    
        return stack.length==0
    }
}