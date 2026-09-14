class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let L = 1
        let R = Math.max(...piles)
        let ans = Infinity
        
        while(L<=R) {
            let mid = L + Math.floor((R-L)/2)
            let time = piles.reduce((acc, p) => acc + Math.ceil(p/mid), 0)
            
            if(time > h) {
                L = mid + 1
            }
            else {
                R = mid-1
                ans = Math.min(ans, mid)
            }
        }
    
        return ans
    }
}