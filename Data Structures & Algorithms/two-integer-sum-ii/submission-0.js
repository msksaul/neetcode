class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let L = 0
    let R = numbers.length-1
    let sum = numbers[L]+numbers[R]
    
    while(sum !== target) {     
        if (sum < target) {
            L++
        }
        else {
            R--
        }
        sum = numbers[L] + numbers[R]
    }
    return [L+1, R+1]
    }
}
