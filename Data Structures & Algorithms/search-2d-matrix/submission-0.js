class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const bs = (ar, tar) => {
        let l = 0
        let r = ar.length
        
            while(l <= r) {
                const mid = l + Math.floor((r-l)/2)
                
                if(ar[mid] == tar) {
                    return true
                }
                else if(ar[mid] < tar) {
                    l = mid + 1
                }
                else {
                    r = mid -1
                }
            }
            return false
        }
    
        for(let i=0; i<matrix.length; i++) {
            const len = matrix[i].length
            
            if(matrix[i][len-1] < target) {
                continue
            }
            
            return bs(matrix[i], target)
        }
    
        return false
    }
}
