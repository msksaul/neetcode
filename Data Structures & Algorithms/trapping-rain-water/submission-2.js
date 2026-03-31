class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let lH = 0
        let rH = 0
        let water = 0
        let L = 0
        let R = height.length-1

        while(L<R) {
            if(height[L]<height[R]) {
                if(height[L]>=lH) {
                    lH = height[L]
                }
                else {
                    water+=lH-height[L]
                }
                L++
            }
            else {
                if(height[R]>=rH) {
                    rH = height[R]
                }
                else {
                    water+=rH-height[R]
                }
                R--
            }
        }
    
        return water
    }
}
