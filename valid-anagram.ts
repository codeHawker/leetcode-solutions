/**
 * Leetcode - 242. Valid Anagram
 * 
 * https://leetcode.com/problems/valid-anagram/
 * 
 * Given two strings s and t, return true if t is an anagram 
 * of s, and false otherwise.
 * 
 * An Anagram is a word or phrase formed by rearranging the 
 * letters of a different word or phrase, typically using 
 * all the original letters exactly once.
 * 
**/

function isAnagram(s: string, t: string): boolean {
    let sSorted: string = s.split("").sort().join()
    let tSorted: string = t.split("").sort().join()
    return(sSorted === tSorted);
};

export default isAnagram;