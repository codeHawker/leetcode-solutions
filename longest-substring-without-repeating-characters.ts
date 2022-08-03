/**
 * Leetcode - 3. Longest Substring Without Repeating Characters
 * 
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * Given a string s, find the length of the longest substring without 
 * repeating characters.
 * 
 */

function lengthOfLongestSubstring(s: string): number {
    let maxLength: number = 0;
    let substring: string = "";
    for(let i=0; i<s.length; i++){

        substring = substring.slice(substring.indexOf(s[i])+1) + s[i]
        maxLength = Math.max(maxLength, substring.length)
    }

    return maxLength;
};

export default lengthOfLongestSubstring;