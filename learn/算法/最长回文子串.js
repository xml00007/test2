// 解法一：暴力枚举法
// 时间复杂度O(n^3)
//  空间复杂度O(1)

function isPalindrome(str) {
    var len = str.length
    var middle = parseInt(len / 2)
    for (var i = 0; i < middle; i++) {
        if (str[i] != str[len - i - 1]) {
            return false
        }
    }
    return true
}

function findLongest(s) {
    var ans = '';
    var max = 0;
    var len = s.length
    for (var i = 0; i < len; i++) {
        for (var r = i + 1; r <= len; r++) {
            var tmpStr = s.substring(i, r)
            if (isPalindrome(tmpStr) && tmpStr.length > max) {
                ans = s.substring(i, r)
                max = tmpStr.length;
            }
        }
    }
    return ans;
}


// 解法二：动态规划 - A

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s || s.length < 2) {
        return s;
    }
    var s_f = s.split('').reverse().join('');
    var resultStr = s[0];
    var maxLen = 1;
    var tmpLen = 1;
    var maxStrIndex = 0;
    var len = s.length;
    //判断字符串是否回文
    function isPalinerome(i, r) {
        if (len - i - 1 == r - tmpLen + 1) {
            console.log('i,r========>',i,r);
            return true
        }
        return false;
    }
    //初始化二维数组
    var len = s.length;
    var arr = Array.from(new Array(len), () => new Array(len).fill(0));
    for (var i = 0; i < len; i++) {
        for (var r = 0; r < len; r++) {
            if (s[i] == s_f[r]) {
                if (i == 0 || r == 0) {
                    arr[i][r] = 1
                } else {
                    arr[i][r] = arr[i - 1][r - 1] + 1
                    tmpLen = arr[i][r]
                }
                // if (tmpLen > maxLen && isPalinerome(i, r)) {
                if (tmpLen > maxLen) {
                    maxStrIndex = r;
                    maxLen = tmpLen;
                    resultStr = s.substring(i - tmpLen + 1, i + 1);
                }
            }
        }
    }
    return resultStr;
};


console.log(longestPalindrome('acdfghjkjhgfdqwe'))
