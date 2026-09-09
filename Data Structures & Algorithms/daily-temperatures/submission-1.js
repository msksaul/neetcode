class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let ans = new Array(temperatures.length).fill(0)
        let stack = []
        
        for(let i=0; i<temperatures.length; i++) {
            if(stack.length==0) {
                stack.push([temperatures[i], i])
                continue
            }
        
            if(stack[stack.length-1][0]>temperatures[i]) {
                stack.push([temperatures[i], i])
            }
            else {
                while(stack.length>0 && stack[stack.length-1][0]<temperatures[i]) {
                    let t = stack.pop()
                    ans[t[1]] = i-t[1]  
                }
                stack.push([temperatures[i], i])
            }
        }
        
        return ans
    }
}
