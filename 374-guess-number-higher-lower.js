/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

Example 1:

Input: n = 10, pick = 6
Output: 6

Example 2:

Input: n = 1, pick = 1
Output: 1

Example 3:

Input: n = 2, pick = 1
Output: 1
*/

/*
1.) binary search, the result of the guess function tells how to adjust mid
2.) if it is -1, hi is mid - 1
3.) if it is 1, lo is mid + 1
4.) otherwise return mids
*/

var guessNumber = function(n) {
    let lo = 1;
    let hi = n;

    while (hi >= lo) {
        let mid = Math.floor((hi + lo)/2);
        let check = guess(mid);

        if (check === -1) {
            hi = mid - 1;
        } else if (check === 1) {
            lo = mid + 1;
        } else {
            return mid;
        }
    }
};
