class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map()
        const cols = new Map()
        const sqrs = new Map()

        for(let i=0; i<9; i++) {
            for(let j=0; j<9; j++) {
                const val = board[i][j]
                if(val == '.') continue

                const r_key = `r-${i}-${val}`
                const c_key = `c-${j}-${val}`
                const s_key = `s-${Math.floor(i/3)}-${Math.floor(j/3)}-${val}`

                if(rows.has(r_key) || cols.has(c_key) || sqrs.has(s_key)) {
                    return false
                }

                rows.set(r_key, true)
                cols.set(c_key, true)
                sqrs.set(s_key, true)
            }
        }

        return true
    }
}
