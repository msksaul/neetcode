class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
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
        
        const pivot = L
        R = nums.length-1
        L = 0
    
        if(nums[pivot]<=target && nums[R] >= target) {
            L = pivot
        }
        else {
            R = pivot-1
        }
        
        while(L<=R) {
            let mid = L + Math.floor((R-L)/2)
            
            if(nums[mid] == target) {
                return mid
            }
            else if(nums[mid] < target) {
                L = mid+1
            }
            else {
                R = mid-1
            }
        }
    
        return -1
    }
}
