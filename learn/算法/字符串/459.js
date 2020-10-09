// 判断是否有重复子串
function findRepearStr(s) {
    let i = 0,
        right = 2;
    while (i < s.length - 2) {
        const target = s.substr(i, right);
        const last = s.substring(i + right);
        if (last.indexOf(target) >= 0) {
            return true;
        }
        if (right > (last.length >> 1)) {
            i++;
            right = 2;
        }
        right++;
    }
    return false
}

// 判断s 是否有多个重复子串构成
var repeatedSubstringPattern = function (s) {
    let s1 = (s + s).slice(1, -1);
    return s1.indexOf(s) != -1;
};

console.log(repeatedSubstringPattern('abcsdfab'));

