/**
 * Leetcode - 20. Valid Parentheses
 * 
 * https://leetcode.com/problems/valid-parentheses/
 * 
 * Given a string s containing just the characters 
 * '(', ')', '{', '}', '[' and ']', determine if the 
 * input string is valid.
 * 
 * An input string is valid if:
 *      1)Open brackets must be closed by the same type of brackets.
 *      2)Open brackets must be closed in the correct order.
**/

function isValid(s: string): boolean {
    let validity: boolean = true;
    let opened: string[] = [];
    interface Lookup {
        [key: string]: string
    };

    let brackets : Lookup = { 
        "(":")",
        "{":"}",
        "[":"]"
    };

    for(let i=0; i<s.length; i++){
        brackets[s[i]] ? opened.push(brackets[s[i]]) //if opening bracket add to list of brackets to be closed
        : s[i] === opened[opened.length -1] && opened.length > 0 ? opened.pop() //if closing bracket check is most recent opened
        : validity = false;
    };
    // if no invalid bracket is detected and have iterated through
    // entire strting. Check all brackets have been closed - ie; there
    // should be none left in teh opened array
    return opened.length == 0 && validity
};

export default isValid;