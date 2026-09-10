class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const t_arrival = (t, p, s) => (t-p)/s
    
        let curr_ta = 0
        let fleets = 0
        
        let pairs = position
        .map((pos, idx) => [pos, speed[idx]])
        .sort((a,b) => b[0]-a[0])
        
        for(const [p, s] of pairs) {
            const t = t_arrival(target, p, s)
            if(t <= curr_ta) {
                continue
            }
            else {
                curr_ta = t
                fleets++
            }
        }
        
        return fleets
    }
}
