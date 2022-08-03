/**
 * Leetcode - 121. Best Time to Buy and Sell Stock
 * 
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a 
 * different day in the future to sell that stock. 
 * Return the maximum profit you can achieve from this transaction. 
 * If you cannot achieve any profit, return 0.
 * 
 */

function maxProfit(prices: number[]): number {
    let currentbuy:number = prices[0];
    let maxprofit: number = 0;
    for(let i=0; i<prices.length; i++) {
        currentbuy = Math.min(currentbuy, prices[i]);
        maxprofit = Math.max(maxprofit, prices[i]-currentbuy);   
    }
    return maxprofit;
};

export default maxProfit;