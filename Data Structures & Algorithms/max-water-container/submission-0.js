class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let L = 0
        let R = heights.length-1
        let maxW = 0

        while(L<R) {
            const area = (R-L) * Math.min(heights[L], heights[R])
            maxW = Math.max(area, maxW)
            
            if(heights[L]<heights[R]) {
              L++
            }
            else {
              R--
            }
        }
  
        return maxW
    }
}
