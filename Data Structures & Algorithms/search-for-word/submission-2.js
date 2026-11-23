class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const m = board.length
        const n = board[0].length
        const w = word.length

        if(m==1 && n==1) return board[0][0] == word

        const backtrack = (pos, idx) => {
            const [i,j] = pos

            if(idx == w) return true

            if(board[i][j] !== word[idx]) return false

            let char = board[i][j]
            board[i][j] = '#'

            for(const [i_off, j_off] of [[0,1],[1,0],[0,-1],[-1,0]]) {
                let r = i+i_off
                let c = j+j_off

                if(r>=0 && r<m && c>=0 && c<n) {
                    if(backtrack([r,c], idx+1)) return true
                }
            }

            board[i][j] = char

            return false
        }

        for(let i=0; i<m; i++) {
            for(let j=0; j<n; j++) {
                if(backtrack([i,j], 0)) return true
            }
        }

        return false
    }
}
