class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            ']': '[',
            '}': '{',
            ')': '('
        }

        let stack = []

        for(let i=0; i<s.length; i++) {
            if(stack.length>0 && stack[stack.length-1] == pairs[s[i]]) {
                stack.pop()
            }
            else {
                stack.push(s[i])
            }
        }

        return stack.length == 0
    }
}
