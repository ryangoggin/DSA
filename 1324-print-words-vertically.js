// see py file for thought process

var printVertically = function(s) {
    let rows = {};
    let words = s.split(" ");
    let res = [];
    let maxLen = 0;

    for (let word of words) {
        maxLen = Math.max(maxLen, word.length);
    }

    for (let word of words){
        for (let i = 0; i < maxLen; i++) {
            if (word[i]) {
                if (rows[i]) {
                    rows[i] += word[i];
                } else {
                    rows[i] = word[i];
                }
            } else {
                if (rows[i]) {
                    rows[i] += " ";
                } else {
                    rows[i] = " ";
                }
            }
        }
    }

    for (let key in rows) {
        let vertWord = rows[key];

        if (vertWord[vertWord.length - 1] === " ") {
            let vertArr = vertWord.split("")
            for (let i = vertArr.length - 1; i >= 0; i--) {
                if (vertArr[i] === " ") {
                    vertArr[i] = "";
                } else {
                    break;
                }
            }
            vertWord = vertArr.join("");
        }

        res.push(vertWord);
    }

    return res;
};
