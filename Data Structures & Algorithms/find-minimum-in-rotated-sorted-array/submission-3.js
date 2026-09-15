class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let L = 0
        let R = nums.length-1
        
        while(L<R) {
            let mid = L + Math.floor((R-L)/2)
            
            if(nums[R]<nums[mid]) {
                L = mid+1
            }
            else {
                R = mid
            }
        }
        
        return nums[L]
    }
}
