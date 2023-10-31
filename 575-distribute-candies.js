/*
ice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.
The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.
Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

Example 1:
Input: candyType = [1,1,2,2,3,3]
Output: 3
Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

Example 2:
Input: candyType = [1,1,2,3]
Output: 2
Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.

Example 3:
Input: candyType = [6,6,6,6]
Output: 1
Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.
*/

/*
time: O(n) - n is length of candyType array
space: O(n) - n is # of unique candy types
1.) calculate the max num of candies and set to a variable (length of candyType array / 2), don't need to round as length is always even
2.) set a res variable to 0 to track the unique candies that can be eaten
3.) create a set to track the unique candy types
4.) iterate over candies
4a.) if the res is the same as the max number of candies, return the max value as it has already been reached
4b.) if the current candy isn't in the unique set, incremement res and add that candy type to the set
4c.) else the candy will not be eaten or added to the set, continue to the next candy
5.) if the loop completes and res isn't the max amount, return res
*/

var distributeCandies = function(candyType) {
    let max = candyType.length/2;
    let res = 0;
    let unique = new Set();

    for (let i = 0; i < candyType.length; i++) {
        if (res === max) return max;

        if (!unique.has(candyType[i])) {
            res++;
            unique.add(candyType[i]);
        } else {
            continue;
        }
    }
    return res;
};
