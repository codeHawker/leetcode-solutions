/**
 * Leetcode - 125. Valid Palindrome
 * 
 * https://leetcode.com/problems/valid-palindrome/
 * 
 * A phrase is a palindrome if, after converting all 
 * uppercase letters into lowercase letters and removing 
 * all non-alphanumeric characters, it reads the same 
 * forward and backward. Alphanumeric characters include 
 * letters and numbers.
 * 
 * Given a string s, return true if it is a palindrome, 
 * or false otherwise.
 * 
**/

function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    return s == reverseString(s)
};

function reverseString(s: string): string {
    let rev: string = ""
    for(let i: number = 0; i < s.length; i++){
        rev = rev + s[s.length - 1 - i]
    }
    return rev
}

export default isPalindrome;