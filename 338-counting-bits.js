// see py file for thought process

var countBits = function(n) {
    let ans = new Array(n+1).fill(0);

    for (let i = 0; i <= n; i++) {
        ans[i] = ans[i >> 1] + (1 & i);
    }

    return ans;
};
