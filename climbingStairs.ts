/**
 * Leetcode - 70. Climbing Stairs
 * 
 * https://leetcode.com/problems/climbing-stairs/
 * 
 * You are climbing a staircase. It takes n steps to reach the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct 
 * ways can you climb to the top?
 * 
 */


function climbStairs(n: number): number {
    
    let prev2steps: number = 0;
    let prev1steps: number = 1;
    let thissteps:number = 0;

    for (let i=0; i<n; i++){
        thissteps = prev1steps + prev2steps;
        prev2steps = prev1steps;
        prev1steps = thissteps;
    }    
    return thissteps
};

export default climbStairs;