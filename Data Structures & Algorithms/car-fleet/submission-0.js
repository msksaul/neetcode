class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let ps = []
        let stack = []
        for(let i=0; i<position.length; i++) {
            ps.push([position[i], speed[i]])
        }
        ps = ps.sort((a,b) => b[0]-a[0])
  
        for(let i=0; i<ps.length; i++) {
            const time = (target-ps[i][0])/ps[i][1]
            stack.push(time)
            const l = stack.length
            if(stack.length >=2 && stack[l-1] <= stack[l-2]) {
                stack.pop()
            }
        }
  
        return stack.length
    }
}
