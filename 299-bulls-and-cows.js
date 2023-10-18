/*
You are playing the Bulls and Cows game with your friend.
You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:
The number of "bulls", which are digits in the guess that are in the correct position.
The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.
The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.

Example 1:

Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1807"
  |
"7810"

Example 2:

Input: secret = "1123", guess = "0111"
Output: "1A1B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1123"        "1123"
  |      or     |
"0111"        "0111"
Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
*/

/*
time - O(n) where n is length of guess/secret
space - O(1), numMap always 10 kvps
1.) make a numMap to map to increment for secret numbers and decrement for guess numbers to determine amount of cows
2.) set variables for bulls and cows at 0 each
3.) set up the numMap to be 0 at 0-9 to start
4.) iterate across secret (which is same length as guess)
4a.) if the numbers of secret and guess match at that index, increment bulls
4b.) otherwise increment the map at the num at that secret index and check if cows should increment (increment if the secret num in the map is =< 0)
4c.) repeat but with decrementing for guess num (if this in the map is >= 0 increment cows)
5.) return the desired string using the final values for bulls and cows
*/

var getHint = function(secret, guess) {
    let numMap = {};
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 10; i++) numMap[i] = 0;

    for (i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) bulls++;

        else {
            numMap[secret[i]]++;
            cows += numMap[secret[i]] <= 0 ? 1 : 0;
            numMap[guess[i]]--;
            cows += numMap[guess[i]] >= 0 ? 1 : 0;
        }
    }

    return bulls + 'A' + cows + 'B';
};
