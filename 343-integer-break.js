// see py file for thought process

var integerBreak = function(n) {
    dp = [];

    for (let i = 0; i < n+1; i++) {
        dp.push(0);
    }

    dp[1] = 1;

    for (let i = 2; i < n+1; i++) {
        dp[i] = -Infinity;
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i-j]);
        }
    }

    return dp[n];
};
