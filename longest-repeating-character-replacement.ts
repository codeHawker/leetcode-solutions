/**
 * Leetcode - 424. Longest Repeating Character Replacement
 * 
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * 
 * You are given a string s and an integer k. You can choose any character 
 * of the string and change it to any other uppercase English character. You 
 * can perform this operation at most k times.
 * 
 * Return the length of the longest substring containing the same letter you 
 * can get after performing the above operations.
 * 
 */

interface Counter {
    [letter: string] : number
}

function characterReplacement(s: string, k: number): number {
    let left: number = 0;
    let maxLength: number = 1;
    let c: Counter = {};
    let replacementCost: number = 0;

    for(let right: number = 0 ; right<s.length; right++){
        c[s[right]] ? c[s[right]]++ : c[s[right]] = 1;
        replacementCost = right - left + 1 - Math.max( ...Object.values(c) )
        if(replacementCost > k){
            c[s[left]] --
            left ++
        }
        maxLength = right-left+1;
    }
    return maxLength;
};

export default characterReplacement;