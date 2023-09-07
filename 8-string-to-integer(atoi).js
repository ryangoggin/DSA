var myAtoi = function(s) {
    let nums = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

    if (s.length <= 1 && s[0] !== " " && !nums.has(s[0])) return 0;

    if (nums.has(s[0]) || (s[0] === "-" && nums.has(s[1])) || (s[0] === "+" && nums.has(s[1]))) {
        let res = parseInt(s);
        if (res > 2**31 - 1) res = 2**31 - 1;
        if (res < (-2)**31) res = (-2)**31;
        return res;
    } else {
        for (let i = 0; i < s.length; i++) {
            console.log(i);
            if (s[i] === " ") {
                continue;
            } else if (nums.has(s[i]) || (s[i] === "-" && nums.has(s[i+1])) || (s[i] === "+" && nums.has(s[i+1]))) {
                let res = parseInt(s.slice(i));
                if (res > 2**31 - 1) res = 2**31 - 1;
                if (res < (-2)**31) res = (-2)**31;
                return res
            } else {
                return 0;
            }
        }
    }
    return 0;
};
