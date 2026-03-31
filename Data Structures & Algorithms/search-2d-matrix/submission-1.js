class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length
        const n = matrix[0].length

        let l = 0
        let r = m * n - 1

        while(l <= r) {
            const mid = l + Math.floor((r-l)/2)

            const i = Math.floor(mid/n)
            const j = mid%n
            const num = matrix[i][j]

            if(num == target) {
                return true
            }
            else if (num < target) {
                l = mid + 1
            }
            else {
                r = mid -1
            }
        }

        return false
    }
}
