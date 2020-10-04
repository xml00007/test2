// https://www.cnblogs.com/kyoner/p/10604781.html
function countingSort(array) {
    var len = array.length,
        B = [],
        C = [],
        min = (max = array[0]);
    console.time("计数排序耗时");
    for (var i = 0; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    }
    for (var j = min; j < max; j++) {
        C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
    }
    for (var k = len - 1; k >= 0; k--) {
        B[C[array[k]] - 1] = array[k];
        C[array[k]]--;
    }
    console.timeEnd("计数排序耗时");
    return B;
}
var arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
const res = countingSort(arr)
console.log(res); //[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]


// 1.当数列最大最小值差距过大时，并不适用于计数排序

// 比如给定20个随机整数，范围在0到1亿之间，此时如果使用计数排序的话，就需要创建长度为1亿的数组，不但严重浪费了空间，而且时间复杂度也随之升高。

// 2.当数列元素不是整数时，并不适用于计数排序

// 如果数列中的元素都是小数，比如3.1415，或是0.00000001这样子，则无法创建对应的统计数组，这样显然无法进行计数排序。

// 正是由于这两大局限性，才使得计数排序不像快速排序、归并排序那样被人们广泛适用。
