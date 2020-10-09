// 673. 最长递增子序列的个数

/**
 * @param {number[]} nums
 * @return {number}
 */


// vue3 获取arr的 lIS 索引
function getSequence(arr) {
    const p = arr.slice()
    const result = [arr[0]]
    let i, j, u, v, c
    const len = arr.length
    for (i = 0; i < len; i++) {
        const arrI = arr[i]
        if (arrI !== 0) {
            j = result.length - 1
            if (arr[j] < arrI) {
                p[i] = arr[j]
                result.push(arr[i])
                continue
            }
            u = 0
            v = result.length - 1
            while (u < v) {
                c = ((u + v) / 2) | 0
                if (arr[c] < arrI) {
                    u = c + 1
                } else {
                    v = c
                }
            }
            if (arrI < result[u]) {
                if (u > 0) {
                    p[i] = arr[u - 1]
                }
                result[u] = arr[i]
            }
        }
    }
    u = result.length
    v = result[u - 1]
    while (u-- > 0) {
        result[u] = arr[v]
        v = p[v]
    }
    return result
}

//  二分查找，返回数组元素需要插入的位置
function biSearch(target, len, value) {
    var left = 0, right = len - 1, mid;
    while (left <= right) {
        mid = left + (right - left) / 2;
        if (target[mid] > value) {
            right = mid - 1;
        }
        else if (target[mid] < value) {
            left = mid + 1;
        }
        else {
            return mid;
        }
    }
    return left;
}

function LIS(arr) {
    var resLen = 1, len = arr.length;
    var target = [];// 在动态规划中使用的数组，用于记录中间结果
    target[0] = arr[0];

    for (let i = 1; i < len; i++) {
        if (arr[i] > target[resLen - 1]) {// 如果大于B中最大的元素，则直接插入到B数组末尾
            target[resLen] = arr[i];
            ++resLen;
        }
        else {
            const pos = biSearch(target, resLen, arr[i]);// 二分查找需要插入的位置
            target[pos] = arr[i];
        }
    }
    // 输出B数组的结果
    return resLen;
}


// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence2(arr) {
    const p = arr.slice()
    const result = [0]
    let i, j, u, v, c
    const len = arr.length
    for (i = 0; i < len; i++) {
        const arrI = arr[i]
        if (arrI !== 0) {
            j = result[result.length - 1]
            if (arr[j] < arrI) {
                p[i] = j
                result.push(i)
                continue
            }
            u = 0
            v = result.length - 1
            while (u < v) {
                c = ((u + v) / 2) | 0
                if (arr[result[c]] < arrI) {
                    u = c + 1
                } else {
                    v = c
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1]
                }
                result[u] = i
            }
        }
    }
    u = result.length
    v = result[u - 1]
    while (u-- > 0) {
        result[u] = v
        v = p[v]
    }
    return result
}

console.log(getSequence2([-2, 1, 3, 5, 4, 2, 7]));
