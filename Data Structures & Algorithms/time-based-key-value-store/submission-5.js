class TimeMap {
    constructor() {
        this.keyStore = new Map()
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let prev = this.keyStore.get(key) || []
        this.keyStore.set(key, [...prev, [value, timestamp]])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let arr = this.keyStore.get(key)
        if(!arr) return ''
        arr = arr.filter(e => e[1]<=timestamp)
        if(arr.length==0) return ''

        let L = 0
        let R = arr.length-1

        while(L<R) {
            let mid = L + Math.floor((R-L)/2)

            if(timestamp<arr[mid][1]) {
                R = mid-1
            }
            else {
                L = mid+1
            }
        }

        return arr[L][0]
    }
}
