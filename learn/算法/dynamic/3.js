// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var str = '';
    var maxStr = ''
    if (s.length <= 1) {
        return s.length
    }
    for (let i = 0; i < s.length; i++) {
        str = s.charAt(i);
        for (let j = i + 1; j < s.length; j++) {
            const charCurrent = s.charAt(j);
            if (str.indexOf(charCurrent) === -1) {
                str += charCurrent;
                if (maxStr.length < str.length) {
                    maxStr = str;
                }
            } else {
                if (maxStr.length < str.length) {
                    maxStr = str;
                }
                break;
            }
        }
    }
    return maxStr.length
}

var lengthOfLongestSubstring2 = function (s) {
    var i = 0, j = i + 1, maxLen = 0, str = s[i];
    while (i < s.length - maxLen) {
        if (j <= s.length - 1 && str.indexOf(s[j]) === -1) {
            str += s[j];
            j++;
        } else {
            if (j - i > maxLen) {
                maxLen = j - i;
            }
            i++;
            str = s[i];
            j = i + 1;;
        }
    }
    return maxLen
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let res = -1;
    let str = '';
    let end = 0;
    while (end <= s.length - 1) {
        const repeatIdx = str.indexOf(s[end])
        if (repeatIdx !== -1) {
            res = Math.max(res, str.length);
            str = str.slice(repeatIdx + 1);
        }
        str += s[end]

        end += 1
    }

    return Math.max(res, str.length);
};

//   作者：kong-kong-z
//   链接：https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/solution/jian-zhi-offer-48-zui-chang-bu-han-zhong-fu-zi--10/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


// console.log(lengthOfLongestSubstring('aab'))
// console.log(lengthOfLongestSubstring(' '))
// console.log(lengthOfLongestSubstring('au'))
// console.log(lengthOfLongestSubstring2("au"))
console.log(lengthOfLongestSubstring2(" "))
// console.log(lengthOfLongestSubstring('bbbbb'))
// console.log(lengthOfLongestSubstring('pwwkew'))
// console.log(lengthOfLongestSubstring('dvdf'))
