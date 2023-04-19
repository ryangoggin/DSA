/*
faster solution logic in python file
*/

//O(n) where n is length of haystack
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        let haystackSlice = haystack.slice(i, i + needle.length);
        if (haystackSlice === needle) {
            return i;
        }
    }
    return -1;
};



/*
    2 strings, needle and haystack
    return index of first occurrence of needle in haystack or -1 if not present
*/

/*
    0a.) check if the length of needle is less than haystack or if there isn't a haystack, return -1 if it isn't
    0b.) check if there isn't a needle, return 0 if there isn't
    2.) have a pointer variable to store the haystack index
    3.) have a pointer variable to store the needle index
    4.) while iterating, check if haystack at h is === to needle at n
    5.) if it is, increment both pointers
    6.) if it is not, set haystack pointer to where it last started checking for matches with needle (difference of h and n + 1) and needle pointer to 0
    7.) once done with the loop, if n is at the end of needle (successsfully found) then return h -n
    8.) otherwise it wasn't found and return -1
*/


// //slightly slower than pure O(n) where n is length of haystack
// var strStr = function(haystack, needle) {
//     let h = 0;
//     let n = 0

//     if (needle.length > haystack.length || !haystack) return -1;
//     if (!needle) return 0;

//     while (h < haystack.length && n < needle.length) {
//         if (haystack[h] === needle[n]) {
//             h++;
//             n++;
//         } else {
//             h = (h - n) + 1;
//             n = 0;
//         }
//     }
//     if (n === needle.length) {
//         return (h - n);
//     } else {
//         return -1;
//     }
// };
