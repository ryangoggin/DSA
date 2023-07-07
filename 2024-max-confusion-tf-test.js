/*
A teacher is writing a test with n true/false questions, with 'T' denoting true and 'F' denoting false. He wants to confuse the students by maximizing the number of consecutive questions with the same answer (multiple trues or multiple falses in a row).

You are given a string answerKey, where answerKey[i] is the original answer to the ith question. In addition, you are given an integer k, the maximum number of times you may perform the following operation:

Change the answer key for any question to 'T' or 'F' (i.e., set answerKey[i] to 'T' or 'F').
Return the maximum number of consecutive 'T's or 'F's in the answer key after performing the operation at most k times.

Example 1:

Input: answerKey = "TTFF", k = 2
Output: 4
Explanation: We can replace both the 'F's with 'T's to make answerKey = "TTTT".
There are four consecutive 'T's.

Example 2:

Input: answerKey = "TFFT", k = 1
Output: 3
Explanation: We can replace the first 'T' with an 'F' to make answerKey = "FFFT".
Alternatively, we can replace the second 'T' with an 'F' to make answerKey = "TFFF".
In both cases, there are three consecutive 'F's.

Example 3:

Input: answerKey = "TTFTTFTT", k = 1
Output: 5
Explanation: We can replace the first 'F' to make answerKey = "TTTTTFTT"
Alternatively, we can replace the second 'F' to make answerKey = "TTFTTTTT".
In both cases, there are five consecutive 'T's.
*/

/*
correct sliding window
1.) make a helper that returns true when both Ts and Fs are over k
2.) while the sliding window is within the range of answerKey:
2a.) increment the amount of Fs and Ts in the window
3.) while the helper returns true incrememnt start and decrememnt whichever is leaving the sliding window
4.) set the max to the max between itself and the length of the window (end - start + 1) amd incrememnt the end
5.) return the max after the while loop
*/

var maxConsecutiveAnswers = function(answerKey, k) {
    let start = 0;
    let end = 0;

    let numT = 0;
    let numF = 0;

    let maxTorF = 0;

    const overK = () => numT > k && numF > k;

    while (end < answerKey.length) {
        if (answerKey[end] === "T") numT++;
        if (answerKey[end] === "F") numF++;

        while (overK()) {
            if (answerKey[start] === "T") numT--;
            if (answerKey[start] === "F") numF--;
            start++;
        }

        maxTorF = Math.max(maxTorF, end - start + 1);
        end++;
    }

    return maxTorF;
};

/*
initial sliding window attempt
only works for 40/93 test cases...
0.) initialize swaps, consectutive Ts, consecutive Fs, max Ts, max Fs, and the start of the consecutives at 0
1.) check for max consecutive Ts first
1a.) iterate through the answer key
1b.) if the current element is F and there are still swaps, increment swaps and consecutive Ts, set max Ts to the max between itself and consecutive Ts
1c.) if the current element is F and there are not swaps, iterate start until the start is at an F (increment start, decrement consecutive Ts), after getting to the F increment start again, decrement swaps and consecutive Ts
1d.) otherwise the element is a T, increment consect Ts and set max Ts to the max between itself and consecutive Ts
2.) repeat for max consecutive Fs
3.) return the max between max Ts and max Fs
*/

var maxConsecutiveAnswers = function(answerKey, k) {
    let start = 0;

    let consecT = 0;
    let consecF = 0;
    let swaps = 0;

    let maxT = 0;
    let maxF = 0;

    for (let i = 0; i < answerKey.length; i++) {
        if (answerKey[i] === "F" && swaps < k) {
            swaps++;
            consecT++;
            maxT = Math.max(consecT, maxT);
        } else if (answerKey[i] === "F" && swaps >= k) {
            while (answerKey[start] !== "F") {
                start++;
                consecT--;
            }
            start++;
            swaps--;
            consecT--;
        }else {
            consecT++;
            maxT = Math.max(consecT, maxT);
        }
    }

    swaps = 0;
    start = 0;

    for (let i = 0; i < answerKey.length; i++) {
        if (answerKey[i] === "T" && swaps < k) {
            swaps++;
            consecF++;
            maxF = Math.max(consecF, maxF);
        } else if (answerKey[i] === "T" && swaps >= k) {
            while(answerKey[start] !== "T") {
                start++;
                consecF--;
            }
            start++;
            swaps--;
            consecF--;
        }else {
            consecF++;
            maxF = Math.max(consecF, maxF);
        }
    }

    return Math.max(maxT, maxF);
};
