class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
    
        const ops = {
            '+': (a,b) => a+b,
            '-': (a,b) => a-b,
            '*': (a,b) => a*b,
            '/': (a,b) => Math.trunc(a/b)
        }
        
        for(const token of tokens) {
            if(!ops[token]) {
                stack.push(token)
            }
            else {
                let b = +stack.pop()
                let a = +stack.pop()
                
                let res = ops[token](a,b)
                stack.push(res)
            } 
        }
        
        return stack[0]
    }
}
