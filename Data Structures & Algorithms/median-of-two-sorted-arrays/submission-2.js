class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const smaller = nums1.length > nums2.length ? nums2 : nums1
        const larger = nums1.length > nums2.length ? nums1 : nums2
        const totalLength = nums1.length + nums2.length

        let l = 0
        let r = smaller.length

        while(l<=r) {
            const pX = l + Math.floor((r-l)/2)
            const pY = Math.floor((totalLength + 1)/2) - pX

            const l1 = pX == 0 ? -Infinity : smaller[pX-1]
            const r1 = pX == smaller.length ? Infinity : smaller[pX]

            const l2 = pY == 0 ? -Infinity : larger[pY-1]
            const r2 = pY == larger.length ? Infinity : larger[pY]

            if(l1<=r2 && l2<=r1) {
                if(totalLength%2 == 0) {
                    return (Math.max(l1,l2) + Math.min(r1,r2)) / 2.0
                }
                else {
                    return Math.max(l1,l2)
                }
            }

            if(l1>r2) {
                r = pX - 1
            }
            else {
                l = pX + 1
            }
        }

        return 0
    }
}
