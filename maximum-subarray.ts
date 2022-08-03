/**
 * Leetcode - 53. Maximum Subarray
 * 
 * https://leetcode.com/problems/maximum-subarray/
 * 
 * Given an integer array nums, find the contiguous 
 * subarray (containing at least one number) which 
 * has the largest sum and return its sum.
 * 
**/


// Start at beginning, if the next number by itself is bigger than the chain it becomes the chain
// Else add it to the chain. Keep a running check of the max chain sum.

function maxSubArray(nums: number[]): number {
    let chainSum: number = nums[0];
    let maxSum: number = chainSum;
    for(let i: number = 1; i<nums.length; i++){
        chainSum = Math.max(chainSum+nums[i], nums[i]);
        maxSum = Math.max(chainSum, maxSum);
    };
    return maxSum;
};

export default maxSubArray;