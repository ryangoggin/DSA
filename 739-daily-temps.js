/*
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
*/

/*
time - O(n*m) where n is length of temps and m is average # of days to warmer temp
1.) use a stack to hold temperature indices
2.) fill a res array of temperatures length w/ 0s
3.) iterate over temperatures
4.) on each index, while the stack has length and the current temp is greater than the last in the stack, pop off the top temp and set that "temp" index in res to current "i" index - that temp index as this is the next warmer day
5.) after the while loop, push i into the stack
6.) return res
*/

var dailyTemperatures = function(temperatures) {
    let stack = [];
    let res = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let temp = stack.pop();
            res[temp] = i - temp;
        }
        stack.push(i);
    }

    return res;
};
