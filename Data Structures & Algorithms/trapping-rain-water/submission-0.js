class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l_arr = []
        let r_arr = []
        let ans = 0

        for(let i=1; i<height.length-1; i++) {
            const j = height.length-i
            l_arr.push(Math.max(...height.slice(0,i)))
            r_arr.push(Math.max(...height.slice(j)))
        }
    
        for(let i=0; i<l_arr.length; i++) {
        const j = l_arr.length-i-1
        const rain = Math.min(l_arr[i], r_arr[j]) - height[i+1]
        rain<0 ? ans+=0 : ans+=rain
        }

        return ans
    }
}
