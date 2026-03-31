class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []
        let maxArea = 0
        
        for(let i=0; i<heights.length; i++) {
            let start = i
            
            while(stack.length && heights[i] < stack[stack.length-1][0]) {
                const [h, idx] = stack.pop()
                const area = h*(i-idx)
                maxArea = Math.max(maxArea, area)
                start = idx
            }
        
            stack.push([heights[i], start])
        }
    
        while(stack.length) {
            const [h, idx] = stack.pop()
            const area = h * (heights.length-idx)
            maxArea = Math.max(maxArea, area)
        }
    
        return maxArea
    }
}
