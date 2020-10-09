// 翻转字符串里的单词



function reverseWord(s) {
    s = s.replace(/\s+/g, ' ').split(' ').reverse().join(' ').trim()
    return s;
}



console.log(reverseWord('a good   example'));
