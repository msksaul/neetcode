class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
     
        const ops = {
            '+': () => {
                const b = stack.pop()
                const a = stack.pop()
                stack.push(a + b)
            },
            '-': () => {
                const b = stack.pop()
                const a = stack.pop()
                stack.push(a - b)
            },
            '*': () => {
                const b = stack.pop()
                const a = stack.pop()
                stack.push(a * b)
            },
            '/': () => {
                const b = stack.pop()
                const a = stack.pop()
                stack.push(Math.trunc(a / b))
            }
        }
     
        for(const c of tokens) {
            if(!ops[c]) {
                stack.push(Number(c))
            }
            else {
                ops[c]()
            }
        }
        
        return stack[0]
    }
}
