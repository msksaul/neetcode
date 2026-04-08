class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, [])
        }

        this.keyStore.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let ans = ''

        const vals = this.keyStore.get(key) || []

        let l = 0
        let r = vals.length-1

        while(l<=r) {
            const mid = l + Math.floor((r-l)/2)

            if(vals[mid][1] <= timestamp) {
                ans = vals[mid][0]
                l = mid + 1
            }
            else {
                r = mid - 1
            }
        }

        return ans
    }
}
