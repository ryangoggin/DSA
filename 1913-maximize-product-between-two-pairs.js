// see py file for thought process

var maxProductDifference = function(nums) {
    let [largest, secondLargest] = [1, 1];
    let [smallest, secondSmallest] = [10000, 10000];

    for (let num of nums) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest) {
            secondSmallest = num;
        }

        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest) {
            secondLargest = num;
        }
    }

    return (largest * secondLargest) - (smallest * secondSmallest);
};
