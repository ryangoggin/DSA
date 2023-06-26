/*
You are given a 0-indexed integer array costs where costs[i] is the cost of hiring the ith worker.

You are also given two integers k and candidates. We want to hire exactly k workers according to the following rules:

You will run k sessions and hire exactly one worker in each session.
In each hiring session, choose the worker with the lowest cost from either the first candidates workers or the last candidates workers. Break the tie by the smallest index.
For example, if costs = [3,2,7,7,1,2] and candidates = 2, then in the first hiring session, we will choose the 4th worker because they have the lowest cost [3,2,7,7,1,2].
In the second hiring session, we will choose 1st worker because they have the same lowest cost as 4th worker but they have the smallest index [3,2,7,7,2]. Please note that the indexing may be changed in the process.
If there are fewer than candidates workers remaining, choose the worker with the lowest cost among them. Break the tie by the smallest index.
A worker can only be chosen once.
Return the total cost to hire exactly k workers.

Example 1:

Input: costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4
Output: 11
Explanation: We hire 3 workers in total. The total cost is initially 0.
- In the first hiring round we choose the worker from [17,12,10,2,7,2,11,20,8]. The lowest cost is 2, and we break the tie by the smallest index, which is 3. The total cost = 0 + 2 = 2.
- In the second hiring round we choose the worker from [17,12,10,7,2,11,20,8]. The lowest cost is 2 (index 4). The total cost = 2 + 2 = 4.
- In the third hiring round we choose the worker from [17,12,10,7,11,20,8]. The lowest cost is 7 (index 3). The total cost = 4 + 7 = 11. Notice that the worker with index 3 was common in the first and last four workers.
The total hiring cost is 11.

Example 2:

Input: costs = [1,2,4,1], k = 3, candidates = 3
Output: 4
Explanation: We hire 3 workers in total. The total cost is initially 0.
- In the first hiring round we choose the worker from [1,2,4,1]. The lowest cost is 1, and we break the tie by the smallest index, which is 0. The total cost = 0 + 1 = 1. Notice that workers with index 1 and 2 are common in the first and last 3 workers.
- In the second hiring round we choose the worker from [2,4,1]. The lowest cost is 1 (index 2). The total cost = 1 + 1 = 2.
- In the third hiring round there are less than three candidates. We choose the worker from the remaining workers [2,4]. The lowest cost is 2 (index 0). The total cost = 2 + 2 = 4.
The total hiring cost is 4.
*/

/*
use a min heap
1.) define pq and the min priority queue with comapre method defined as seen below
2.) set up left, right, and res variables
3.) to make the first group iterate over candidates and enqueue the left element and the index and increment left
4.) to make the last group iterate over candidates and enqueue the right element and the index and decrement right
5.) iterate 0 to k and dequeue and enqueue from the pq as needed to get the k cheapeast workers from hiring groups of candidate size
6.) return res
*/

var totalCost = function(costs, k, candidates) {
    let pq = new MinPriorityQueue({
        compare: (x, y) => {
            if (x[0] != y[0]) return x[0] - y[0];
            return x[1] - y[1];
        }
    });

    let n = costs.length
    let left = 0;
    let right = n - 1;
    let res = 0;

    for (let i = 0; i < candidates; i++) {
        if (left <= right) {
            pq.enqueue([costs[left], left]);
            left++;
        }
    }
    for (let i = 0; i < candidates; i++) {
        if (left <= right) {
            pq.enqueue([costs[right], right]);
            right--;
        }
    }
    for (let i = 0; i < k; i++) {
        let curr = pq.dequeue();
        res += curr[0];
        if (curr[1] < left && left <= right) {
            pq.enqueue([costs[left], left]);
            left++;
        } else if (curr[1] > right && left <= right) {
            pq.enqueue([costs[right], right]);
            right--;
        }
    }
    return res;
};

/*
1.) initialize a removed variable and make a default param total = 0
2.) base case is k is 0, return the total
3.) if the amount of candidates in an interview group is greater than or equal to the total candidates left, check over all candidates
3a.) take the min, iterate over the costs to find the first index of min, splcie it out, break the loop, decrement k, add removed value to total
3b.) return a recursive call with updated k, costs, and total
4.) otherwise need a first and last candidate group
5.) make 2 arrays for those slices of costs
6.) take the min of each array
7.) take the min between those two values
8.) iterate over the first candidate group for the first index of min cost
9.) splice it out and set removed to that value and break the loop if there's a match
10.) if there isn't a match iterate over the 2nd candidate group for the min cost to splice out
11.) outside the loop decrement k and add the removed value to total
12.) return a recursive call with updated k, costs, and total
*/

/*
exceeds time limit but passes 132/160 test cases smh

var totalCost = function(costs, k, candidates, total = 0) {
    let removed;

    if (k === 0) return total;

    if (candidates >= costs.length) {
        let minCost = Math.min(...costs);

        for (let i = 0; i < costs.length; i++) {
            if (costs[i] === minCost) {
                removed = costs.splice(i, 1);
                break;
            }
        }

        k--;
        total += removed[0];
        return totalCost(costs, k, candidates, total);
    } else {
        let first = costs.slice(0, candidates);
        let last = costs.slice(costs.length - candidates);

        let minFirst = Math.min(...first);
        let minLast = Math.min(...last);

        let minCost = Math.min(minFirst, minLast);

        for (let i = 0; i < candidates; i++) {
            if (costs[i] === minCost) {
                removed = costs.splice(i, 1);
                break;
            }
        }

        if (!removed) {
            for (let i = costs.length - candidates; i < costs.length; i++) {
                if (costs[i] === minCost) {
                    removed = costs.splice(i, 1);
                    break;
                }
            }
        }

        k--;
        total += removed[0];
        return totalCost(costs, k, candidates, total);
    }
};
*/
