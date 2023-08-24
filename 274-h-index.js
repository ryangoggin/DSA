// see py file for thought process
// don't need reverse, just set sort to be in descending numerical order

var hIndex = function(citations) {
    citations.sort((a, b) => b-a);

    for (let i = 0; i < citations.length; i++) {
        if (i+1 === citations[i]) {
            return i+1;
        } else if (i+1 > citations[i]) {
            return i;
        }
    }

    return citations.length;
};
