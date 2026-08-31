class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
      let L = 0
      let R = heights.length-1
      let max_area = 0

      while(L<R) {
        let area = (R-L)*Math.min(heights[R], heights[L])
        max_area=Math.max(max_area, area)

        if(heights[L]<heights[R]) {
          L++
        }
        else {
          R--
        }
      }

      return max_area
    }
}
