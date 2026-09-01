class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        let i = 0

        for(let j=0; j<prices.length; j++) {
            if(prices[i]<prices[j]) {
                profit = Math.max(profit, prices[j]-prices[i])
            }
            else {
                i = j
            }
        }
    
        return profit
        }
}
