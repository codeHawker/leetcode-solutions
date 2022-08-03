/**
 * Leetcode - 217. Contains Duplicate
 * 
 * https://leetcode.com/problems/contains-duplicate/
 * 
 * Given an integer array nums, return true if any value appears at least twice 
 * in the array, and return false if every element is distinct.
 * 
 */


function containsDuplicate(nums: number[]): boolean {
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] == nums[j]){
                return(true);
            }
        }
    }
    return(false);
};

export default containsDuplicate;