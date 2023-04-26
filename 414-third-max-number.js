// look at python file for reasoning

// NOTE: JS needs custom sort for integers greater than 9 because it sorts alphabetically, not numerically

var thirdMax = function(nums) {
    let unique = new Set(nums);
    let uniqueArr = Array.from(unique);
    let sorted = uniqueArr.sort(function(a, b) {
        return a - b;
    });

    if (sorted.length === 1) {
        return sorted[0];
    } else if (sorted.length === 2) {
        return sorted.slice(-1);
    } else {
        return sorted.slice(-3, -2);
    }
};
