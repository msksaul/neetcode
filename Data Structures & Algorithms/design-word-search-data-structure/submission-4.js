class WordDictionary {
    constructor() {
        this.dic = {}
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let d = this.dic

        for(const l of word) {
            if(!d[l]) {
                d[l] = {}
            }
            d = d[l]
        }

        d['#'] = '#'
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let d = this.dic
        const dfs = (d, idx) => {
            if(idx == word.length) {
                return !!d['#']
            }

            let letter = word[idx]

            if(letter != '.') {
                if(!d[letter]) {
                    return false
                }
                else {
                    return dfs(d[letter], idx+1)
                }
            }
            else {
                return Object.keys(d).some(letter => letter !== '/' && dfs(d[letter], idx + 1))
            }
        }

        return dfs(d, 0)
    }
}
