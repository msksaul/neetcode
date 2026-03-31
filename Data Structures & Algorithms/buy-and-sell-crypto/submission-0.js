class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0]
        let sell = prices[0]
        let profit = 0

        for(let i=1; i<prices.length; i++) {
            if(prices[i-1]>prices[i]) {
                buy = Math.min(buy, prices[i])
                sell = prices[i]
            }
            else {
                sell = prices[i]
                profit = Math.max(profit, sell-buy)
            }
        }

        return profit
    }
}
