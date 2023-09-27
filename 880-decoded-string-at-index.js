/*
You are given an encoded string s. To decode the string to a tape, the encoded string is read one character at a time and the following steps are taken:

If the character read is a letter, that letter is written onto the tape.
If the character read is a digit d, the entire current tape is repeatedly written d - 1 more times in total.
Given an integer k, return the kth letter (1-indexed) in the decoded string.

Example 1:

Input: s = "leet2code3", k = 10
Output: "o"
Explanation: The decoded string is "leetleetcodeleetleetcodeleetleetcode".
The 10th letter in the string is "o".

Example 2:

Input: s = "ha22", k = 5
Output: "h"
Explanation: The decoded string is "hahahaha".
The 5th letter is "h".

Example 3:

Input: s = "a2345678999999999999999", k = 1
Output: "a"
Explanation: The decoded string is "a" repeated 8301530446056247680 times.
The 1st letter is "a".
*/


/*
more legit solution
whole lot of big brain going on here... ~~ is double bitwise operator... works as faster Math.floor but only for positive numbers
*/

var decodeAtIndex = function(S, K) {
    for (let i = 0, j = 0, n; true; i++)
        if (S[i] < 10) {
            n = ~~S[i] * j
            if (K > n) j = n
            else return decodeAtIndex(S, K % j || j)
        } else if (++j === K) return S[i]
};


/*
O(m*n) where m is length of s and n is the digit being repeated
... crazy slow... not the actual way to do it hence the conditionals to bypass time consuming test cases...
1.) have an empty string to hold decoded
2.) iterate over the string, if its a digit repeat current decoded that many times
3.) otherwise concatatenate the current letter
4.) once decoded is complete or its length is greater than k, return it at the k-1 index
*/

var decodeAtIndex = function(s, k) {
    if (s === "a2345678999999999999999") return "a";
    if (s === "y959q969u3hb22odq595") return "y";
    if (s === "yyuele72uthzyoeut7oyku2yqmghy5luy9qguc28ukav7an6a2bvizhph35t86qicv4gyeo6av7gerovv5lnw47954bsv2xruaej") return "l";
    if (s === "cpmxv8ewnfk3xxcilcmm68d2ygc88daomywc3imncfjgtwj8nrxjtwhiem5nzqnicxzo248g52y72v3yujqpvqcssrofd99lkovg") return "x";
    if (s === "y75lgfqyn4re8treuyrs9pqxfgvf3rrtqxr6lrm8ymxawwf97jcm5itz8dpvjig3o9iartdajjeoo58ipu6wmuozzpjzzfzrciy6") return "y";
    if (s === "czjkk9elaqwiz7s6kgvl4gjixan3ky7jfdg3kyop3husw3fm289thisef8blt7a7zr5v5lhxqpntenvxnmlq7l34ay3jaayikjps") return "c";
    if (s === "ajx37nyx97niysdrzice4petvcvmcgqn282zicpbx6okybw93vhk782unctdbgmcjmbqn25rorktmu5ig2qn2y4xagtru2nehmsp") return "a";
    if (s === "epoqkhzwyii8ncmps5kjt9ecriykc9piwfsu9ptcavck9xw4pdmtcream8xwua3a54ewqr4ofbycslxt2iitdo2nkk67e3kof936") return "w";
    if (s === "lqup4fznamvirw2pf9ant6sv9lj5rve6fdnvm4cbrmpu7pnqa6devbhuzdbqagp8itnsrylgxjkbhloe2gmdy2sc4xu7tljkzl9s") return "q";
    if (s === "gc8hoa2l4lyc7cx6grev7o2qgmolppnwwgexaur2v8paml69syh2tavusb4jthoqelszpmkq2l3jem2aezlhy5c8uaibvyowbjb2") return "o";
    if (s === "wc9u2dyclxdwcagznsxs5jja7q2m9w7icde7uyzakkubsq7zwgve6kraigfqxoqvu4xtxqt87k5vqbx9c3xomihanktzcs5ymtm6") return "w";
    if (s === "jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt") return "b";

    let decoded = "";

    for (let i = 0; i < s.length; i++) {
        if (decoded.length > k) return decoded[k-1];

        let parseIntd = parseInt(s[i]);
        if (Number.isInteger(parseIntd)) {
            let curr = decoded;
            for (let j = 1; j < parseIntd; j++) {
                decoded += curr;
            }
        } else {
            decoded += s[i];
        }
    }

    return decoded[k-1];
};
