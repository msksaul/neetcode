class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if(!nums || k<=0) return []
    
        let resIndex = 0
        let ans = new Array(nums.length-k+1).fill(0)
        let queue = []

        for(let i=0; i<nums.length; i++) {
        if(queue.length>0 && queue[0] == i-k) {
            queue.shift()
        }
        
        while(queue.length>0 && nums[queue[queue.length-1]] < nums[i]) {
            queue.pop()
        }
        queue.push(i)
        
            if(i >= k-1) {
                ans[resIndex++] = nums[queue[0]]
            }
        }
    
        return ans
    }
}
