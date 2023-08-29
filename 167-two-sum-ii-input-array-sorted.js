/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.



Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
*/

/*
correct two pointer implementation
1.) set pointers at opposite ends of the array
2.) while the target isn't met, decrement second pointer if combo is over target
3.) otherwise increment first pointer
4.) return an array of the pointers, each + 1
*/

var twoSum = function(numbers, target) {
    let p1 = 0;
    let p2 = numbers.length - 1;

    while (numbers[p1] + numbers[p2] !== target) {
        if (numbers[p1] + numbers[p2] > target) {
            p2--;
        } else {
            p1++;
        }
    }

    return [p1 + 1, p2 + 1];
};

/*
time: O(n), space: O(n) --> they wanted constant space but oops
1.) use a set for nums to have O(1) accessing
2.) iterate over numbers and set a first and second value using the current elements diff between itself and target
3.) break out of the loop once the first set of numbers is found
4.) iterate over the numbers again and get their indices into a res array once they match first or second
5.) return inside the loop once the res array is of length 2
*/

var twoSum = function(numbers, target) {
    let res = [];
    let set = new Set(numbers);
    let first, second;

    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i];

        if (set.has(diff)) {
            first = numbers[i];
            second = diff;
            break;
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === first) {
            res.push(i+1);
        } else if (numbers[i] === second) {
            res.push(i+1);
        }

        if (res.length === 2) return res;
    }

};

/*
brute force two pointer, too slow O(n^2)
1.) go over every index combination in a while loop
2.) once the first match is reached, return the pointers in an array
*/

var twoSum = function(numbers, target) {
    let first = 1;
    let second = 2;

    while (first < numbers.length) {
        if (numbers[first-1] + numbers[second-1] === target) return [first, second];

        else if (second === numbers.length) {
            first++;
            second = first + 1;
        } else {
            second++;
        }
    }

};
