class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a-b)
        let sol = []
        
        for(let i=0; i<nums.length; i++) {
            if(nums[i] > 0) break
            if(nums[i] == nums[i-1]) continue
        
            let L = i+1
            let R = nums.length-1
            
            while(L<R) {
                let sum = nums[i]+nums[L]+nums[R]
                
                if(sum == 0) {
                    sol.push([nums[i], nums[L], nums[R]])
                    L++
                    R--
                    
                    while(L<R && nums[L] == nums[L-1]) { L++ }
                    while(L<R && nums[R] == nums[R+1]) { R-- }
                }
                else if(sum > 0) {
                    R--
                }
                else {
                    L++
                }
            }
        }

        return sol

        }
}
