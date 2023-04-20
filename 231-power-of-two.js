/*
return true if n is a power of 2, false if not
*/

/*
recursive solution
1.) check if n is 1, return true if it is (2^0)
2.) check if n is 0, return false if it is
3.) check if n is divisible by 2
4a.) if it is, check if n is 2
4b.) return true if it is (base case), return isPowerOfTwo(n/2) if not (recursive case)
*/
var isPowerOfTwo = function(n) {
    if (n === 1) return true;
    if (n === 0) return false;

    if (n%2 == 0) {
        if (n === 2) {
            return true;
        } else {
            return isPowerOfTwo(n/2);
        }
    } else {
        return false;
    }
};
