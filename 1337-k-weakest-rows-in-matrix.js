// see py file for thought process

var kWeakestRows = function(mat, k) {
    let strength = {};
    let res = [];

    for (let i = 0; i < mat.length; i++) {
        strength[i] = 0;

        for (let person of mat[i]) {
            if (person === 1) {
                strength[i]++;
            } else {
                continue;
            }
        }
    }

    let entries = Object.entries(strength);
    entries.sort((a,b) => a[1]-b[1]);

    for (let i = 0; i < k; i++) {
        res.push(parseInt(entries[i][0]));
    }

    return res
};
