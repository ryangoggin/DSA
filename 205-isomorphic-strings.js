// see py file for thought process

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    translation = {};

    for (let i = 0; i < s.length; i++) {
        if (translation[s[i]]) {
            if (translation[s[i]] === t[i]) {
                continue;
            } else {
                return false;
            }
        } else {
            translation[s[i]] = t[i];
        }
    }

    let entries = Object.entries(translation);
    let unique = new Set();

    for (let entry of entries) {
        if (!unique.has(entry[1])) {
            unique.add(entry[1]);
        } else {
            return false;
        }
    }

    return true;
};
