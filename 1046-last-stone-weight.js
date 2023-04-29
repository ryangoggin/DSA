/*
given an array of stones where stones[i] is the weight of the ith stone
smash heaviest stones together, remaining stone is diff in their weight
return the weight of the last remaining stone if there is one
*/

/*
1.) return 0 if there are no stones to start
2.) while there's more than 1 stone left sort them in ascending order
3.) using shift, remove those last 2 heaviest stones and get their diff
4.) the remainder is pushed to the end of stones
5.) this repeats until one stone is left, return that first index at the end of the loop
*/

var lastStoneWeight = function(stones) {
    if(stones.length == 0) return 0;

    while(stones.length > 1) {
        stones.sort((a, b) => b - a);
        let x = stones.shift() - stones.shift();
        stones.push(x);
    }

    return stones[0];
};
