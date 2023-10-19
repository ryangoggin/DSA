// see py file for thought process

var backspaceCompare = function(s, t) {
    let resS = [];
    let resT = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
            resS.pop();
        } else {
            resS.push(s[i]);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] === "#") {
            resT.pop();
        } else {
            resT.push(t[i]);
        }
    }

    return resS.join("") === resT.join("");
};
