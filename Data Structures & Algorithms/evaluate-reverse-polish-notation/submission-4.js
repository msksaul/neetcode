class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
     
        const ops = {
        '+': () => {
            const res = Number(stack[stack.length-2]) + Number(stack[stack.length-1])
            stack.pop()
            stack.pop()
            stack.push(res)
        },
        '-': () => {
            const res = Number(stack[stack.length-2]) - Number(stack[stack.length-1])
            stack.pop()
            stack.pop()
            stack.push(res)
        },
        '*': () => {
            const res = Number(stack[stack.length-2]) * Number(stack[stack.length-1])
            stack.pop()
            stack.pop()
            stack.push(res)
        },
        '/': () => {
            const res = Math.trunc(Number(stack[stack.length-2]) / Number(stack[stack.length-1]))
            stack.pop()
            stack.pop()
            stack.push(res)
        }
        }
     
        for(const c of tokens) {
            if(!ops[c]) {
                stack.push(c)
            }
            else {
                ops[c]()
            }
        }
        
        return stack[0]
    }
}
