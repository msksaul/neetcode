class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1

        while(l<r) {
            const mid = l + Math.floor((r-l)/2)

            if(nums[mid] > nums[r]) {
                l = mid + 1
            }
            else {
                r = mid
            }
        }

        let midM = l

        if(midM == 0) {
            l = 0
            r = nums.length - 1
        }
        else if(target >= nums[0] && target <= nums[midM - 1]) {
            l = 0
            r = midM - 1
        }
        else {
            l = midM
            r = nums.length - 1
        }

        while(l<=r) {
            const mid = l + Math.floor((r-l)/2)

            if(nums[mid] == target) {
                return mid
            }
            else if(nums[mid] < target) {
                l = mid + 1
            }
            else {
                r = mid - 1
            }
        }

        return -1
    }
}
