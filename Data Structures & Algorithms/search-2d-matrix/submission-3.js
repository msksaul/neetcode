class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let L = 0
        let R = matrix.length*matrix[0].length-1
        const N = matrix[0].length 
        
        while(L<=R) {
            let mid = L+Math.floor((R-L)/2)
            let row = Math.floor(mid/N)
            let col = mid%N
            
            if(matrix[row][col]==target) {
                return true
            }
            else if(matrix[row][col]<target) {
                L = mid+1
            }
            else {
                R = mid-1
            }
        }
    
        return false
    }
}
