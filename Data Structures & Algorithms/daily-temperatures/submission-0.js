class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let ans = new Array(temperatures.length).fill(0)
        let stack = []

        for(let i=0; i<temperatures.length; i++) {
            while(stack.length>0 && stack[stack.length-1][0] < temperatures[i]) {
                const [_t, idx] = stack.pop()
                ans[idx] = i - idx
            }
            stack.push([temperatures[i], i])
        }

        return ans
    }
}
