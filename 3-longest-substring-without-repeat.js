/*
given a string s, return the longest substring in s without repeats
*/

/* USES SLIDING WINDOW*/
/*
1.) use 2 pointers started at 0, one to track the start index of the substring, one to track the current letter index
2.) set max and current length to 0
3.) iterate over s with a while loop (while the currLetter index is within s)
4.) use a set to track the unique letters in the substring
5.) if the current letter isn't in the set, increment current length and current letter index and add that letter to the set
6.) if current letter is in the set, increment substring start index, set curr letter index to start, reset the set, reset current length to 0
7.) return maxLength after the while loop finishes
*/

var lengthOfLongestSubstring = function(s) {
    let stringStart = 0;
    let currLetter = 0;
    let maxLength = 0;
    let currLength = 0;
    let currStringSet = new Set();

    if (!s) return 0;
    if (s.length === 1) return 1;

    while (currLetter < s.length) {
        if (!currStringSet.has(s[currLetter])) {
        currStringSet.add(s[currLetter])
        currLength++;
        currLetter++;
        if (currLength > maxLength) maxLength = currLength;
        } else {
        stringStart++;
        currLetter = stringStart;
        currLength = 0;
        currStringSet = new Set();
        }
    }

    return maxLength;
};

/*DOESN'T USE SLIDING WINDOW*/
