/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let i = 0;
    if (needle.length === 0) {
        return 0;
    }
    if (haystack.length < needle.length) {
        return -1;
    }
    if (haystack === needle) {
        return 0;
    }
    while (i < haystack.length - needle.length + 1) {
        if (haystack[i] == needle[0]) {
            const str = haystack.substr(i, needle.length);
            if (str == needle) {
                return i;
            }
        }
        i++;
    }
    return -1;
};


console.log(strStr("mississippi", "pi"));
