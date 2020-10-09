// 字符串的排列
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let i = 0, hash = {};
    [...s1].map(i => {
        if (hash[i]) {
            hash[i] += 1;
        } else {
            hash[i] = 1;
        }
    })
    function isContain(str) {
        var newHash = JSON.parse(JSON.stringify(hash));
        var flag = true;
        for (let i = 0; i < str.length; i++) {
            const ele = str[i];
            if (newHash[ele]) {
                newHash[ele]--;
                if (newHash[ele] < 0) {
                    flag = false;
                    return;
                }
            }
        }
        if (!flag) return flag;

        return Object.keys(newHash).filter(key => newHash[key] === 0).length === Object.keys(newHash).length;
    }
    while (i <= s2.length - s1.length) {
        if (hash[s2[i]]) {
            const str = s2.substr(i, s1.length);
            if (isContain(str)) {
                return true
            }
        }
        i++;
    }
    return false;
};

var checkInclusion2 = function (s1, s2) {
    let i = 0, hash = {};
    function createHash(str) {
        var strHash = {};
        [...str].map(i => {
            if (strHash[i]) {
                strHash[i] += 1;
            } else {
                strHash[i] = 1;
            }
        })
        return strHash;
    }
    hash = createHash(s1);
    while (i <= s2.length - s1.length) {
        if (hash[s2[i]]) {
            const str = s2.substr(i, s1.length);
            const hash2 = createHash(str);
            const keys = Object.keys(hash2)
            if (keys.filter(i => hash2[i] === hash[i]).length === keys.length) {
                return true;
            }
        }
        i++;
    }
    return false;
};

console.log(checkInclusion2("hello", "ooolleoooleh"))
