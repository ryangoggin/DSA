/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.



Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
*/

/*\
0.) if n is already 0 or there's only 1 spot in the flowerbed that's 0 and n = 1, return true
1.) iterate over flowerbed
2.) if current spot is a 0 check adjacent spots
2a.) if adjacent spots are both 0s or the only valid spot is a 0, swap for a 1 and decrement n
2b.) if n gets to 0 return true
3.) if not continue through flowerbed
4.) return false if the loop finished without n reaching 0
*/

var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true;

    if (n === 1 && flowerbed.length === 1 && flowerbed[0] === 0) return true;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            if (i === 0) {
                if (flowerbed[i + 1] === 0) {
                    flowerbed[i] = 1;
                    n--;
                    if (n === 0) return true;
                }
            } else if (i === flowerbed.length - 1) {
                if (flowerbed[i - 1] === 0) {
                    flowerbed[i] = 1;
                    n--;
                    if (n === 0) return true;
                }
            } else {
                if (flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0) {
                    flowerbed[i] = 1;
                    n--;
                    if (n === 0) return true;
                }
            }
        }
    }
    return false;
};
