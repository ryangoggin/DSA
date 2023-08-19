/*
You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.

Example 1:

Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
Output: [4,0,3]
Explanation:
- 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
- 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
- 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
Thus, [4,0,3] is returned.

Example 2:

Input: spells = [3,1,2], potions = [8,5,8], success = 16
Output: [2,0,2]
Explanation:
- 0th spell: 3 * [8,5,8] = [24,15,24]. 2 pairs are successful.
- 1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful.
- 2nd spell: 2 * [8,5,8] = [16,10,16]. 2 pairs are successful.
Thus, [2,0,2] is returned.
*/

/*
binary search
1.) sort potions to make the bianry search on that array work
2.) make a res array to hold num of products above success
3.) iterate across spells (DON'T sort spells to maintain their order for res)
3a.) make a lo at 0 and hi at length of potions - 1, declare a mid to make it accessible in the outer for loop's scope
3b.) while hi and lo aren't overlapping, check if product of spells[i] and potions[mid] is greater than or equal to success
3c.) hi is mid-1 if so, otherwise lo is mid+1
4.) once while loop finishes, mid should be at the border of successful potions in the sorted potions array
5.) check if the potion at mid is greater than or equal to success
5a.) if it is, push in the length of potions minus the index mid is at as all potions starting at mid to the end of potions are successful
5b.) otherwise, subtract one from potion length - mid, but check if this become negative and set it to 0 if it does... push this value to res
6.) after the for loop goes over all spells, return res
*/

var successfulPairs = function(spells, potions, success) {
    potions.sort((a,b) => a-b);

    let res = [];

    for (let i = 0; i < spells.length; i++) {
        let lo = 0;
        let hi = potions.length-1;
        let mid;

        while (hi >= lo) {
            mid = Math.floor((hi+lo)/2);

            if (spells[i] * potions[mid] >= success) {
                hi = mid-1;
            } else {
                lo = mid+1;
            }
        }

        if (spells[i]*potions[mid] >= success) {
            res.push(potions.length - mid);
        } else {
            let potentialPairs = potions.length - mid - 1;

            if (potentialPairs < 0) potentialPairs = 0;

            res.push(potentialPairs);
        }
    }

    return res;
};
