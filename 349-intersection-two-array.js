// see py file for thought process

var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let unique1 = Array.from(set1);
    let res = [];

    for (let num of unique1) {
        if (set2.has(num)) res.push(num);
    }

    return res;
};
