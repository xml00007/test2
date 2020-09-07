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


console.log(lengthOfLongestSubstring('aab'))
console.log(lengthOfLongestSubstring(' '))
console.log(lengthOfLongestSubstring('au'))
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('dvdf'))
