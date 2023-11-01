/*

*/

/*
time - O(nlogn) --> needs a sort
space - O(n) where n is number of unique numbers in the bst (the freq dict holds each as a key)

1.) do a breadth first search to get the freq of each number
2.) convert the freq object to its entries
3.) sort these entries by their frequency
4.) the first frequency of this array is the mode
5.) iterate across the entries and if the current entry has the frequency of the mode, put it in the res
6.) once you reach an entry below the mode, break the loop and return res
*/

var findMode = function(root) {
    let freq = {};
    let res = [];

    let queue = [root];

    while (queue.length > 0) {
        let queueLen = queue.length;

        for (let i = 0; i < queueLen; i++) {
            let node = queue[i];
            freq[node.val] ? freq[node.val]++ : freq[node.val] = 1;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        queue.splice(0, queueLen);
    }

    let entries = Object.entries(freq);
    entries.sort((a,b) => b[1] - a[1]);

    let mode = entries[0][1];
    for (let entry of entries) {
        if (entry[1] === mode) {
            res.push(entry[0]);
        } else {
            break;
        }
    }

    return res;
};
