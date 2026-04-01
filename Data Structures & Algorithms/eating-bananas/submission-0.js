class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1
        let r = Math.max(...piles)
        
        const k_works = (k) => {
            let hours = 0
            for(const p of piles) {
                hours += Math.ceil(p/k)
            }

            return hours <= h
        }

        while(l < r) {
            const mid = l + Math.floor((r-l)/2)

            if(k_works(mid)) {
                r = mid
            }
            else {
                l = mid + 1
            }
        }

        return l
    }
}
