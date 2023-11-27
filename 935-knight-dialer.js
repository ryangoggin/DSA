// see py file for thought process

var knightDialer = function(n) {
    let memo = new Map();

    let nextValidKeys = {
        0: [4, 6],
        1: [6, 8],
        2: [7, 9],
        3: [4, 8],
        4: [0, 3, 9],
        5: [],
        6: [0, 1, 7],
        7: [2, 6],
        8: [1, 3],
        9: [2, 4]
    };

    let count = 0;

    for (let i = 0; i <= 9; i++) {
        count = (count + calcDistinct(i, n - 1)) % (1e9 + 7);
    }

    return count;

    function calcDistinct(currKey, n) {
        const key = `${currKey}#${n}`;

		// base case
        if (n == 0) return 1;
        if (memo.has(key)) return memo.get(key);

        let count = 0;

        for (const nextKey of nextValidKeys[currKey]) {
            count = (count + calcDistinct(nextKey, n - 1)) % (1e9 + 7);
        }

        memo.set(key, count);
        return count;
    }
};
