class PrefixTree {
    constructor() {
        this.trie = {}
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let d = this.trie

        for(const l of word) {
            if(!d[l]) {
                d[l] = {}
            }
            d = d[l]
        }

        d['.'] = '.'
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let d = this.trie

        for(const l of word) {
            if(!d[l]) {
                return false
            }
            d = d[l]
        }

        return !!d['.']
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let d = this.trie

        for(const l of prefix) {
            if(!d[l]) {
                return false
            }
            d = d[l]
        }

        return true
    }
}
