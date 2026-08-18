class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let L = 0
        let R = numbers.length-1

        while(L < R) {
            let num = numbers[L] + numbers[R]

            if(num == target) {
                break
            }
            else if(num > target) {
                R--
            }
            else {
                L++
            }
        }

        return [L+1, R+1]
    }
}
