// 541. 反转字符串 II
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    const len = Math.floor(s.length / (2 * k));
    const last = s.length % (2 * k);
    let i = 0,
        res = '';
    // if (s.length < k) return s;
    var reverseString = function (s) {
        s = [...s];
        const l = s.length;
        let i = 0,
            halfL = (l >> 1);
        while (i < halfL) {
            [s[i], s[l - i - 1]] = [s[l - i - 1], s[i]];
            i++;
        }
        return s.join('');
    };
    while (i < len) {
        const str = reverseString(s.substr(i * 2 * k, k));
        res += (str + s.substr(i * 2 * k + k, k))
        i++;
    }
    const str = reverseString(s.substr(len * 2 * k, k));
    res += str + s.substr(len * 2 * k + k, k);

    return res;
};
console.log(reverseStr("a", 8));
