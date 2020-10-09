// 最长递增子序列
// 0, 3, 4, 17, 2, 8, 6, 10

function lis(n) {
    if (n.length === 0) return 0
    // 创建一个和参数相同大小的数组，并填充值为 1
    let array = new Array(n.length).fill(1)
    // 从索引 1 开始遍历，因为数组已经所有都填充为 1 了
    for (let i = 1; i < n.length; i++) {
        // 从索引 0 遍历到 i
        // 判断索引 i 上的值是否大于之前的值
        for (let j = 0; j < i; j++) {
            if (n[i] > n[j]) {
                array[i] = Math.max(array[i], 1 + array[j])
            }
        }
    }
    console.log(array)
    let res = 1
    for (let i = 0; i < array.length; i++) {
        res = Math.max(res, array[i])
    }
    return res
}

// 含有一个输出的
function lisWithOneOutput(n) {
    if (n.length === 0) return 0
    // 创建一个和参数相同大小的数组，并填充值为 1
    let array = new Array(n.length)
    // 从索引 1 开始遍历，因为数组已经所有都填充为 1 了
    array[0] = {
        res: [],
        len: 1
    };
    for (let i = 1; i < n.length; i++) {
        // 从索引 0 遍历到 i
        // 判断索引 i 上的值是否大于之前的值
        array[i] = {
            res: [],
            len: 1
        };
        for (let j = 0; j < i; j++) {
            if (n[i] > n[j]) {
                array[i].len = Math.max(array[i].len, 1 + array[j].len)
                if (array[j].res.length === 0) {
                    array[j].res.push(n[j])
                }
                if (array[i].len <= 1 + array[j].len) {
                    array[i].res = array[j].res.concat(n[i])
                }
            }
        }
    }
    console.log(array)
    let res = 1
    for (let i = 0; i < array.length; i++) {
        res = Math.max(res, array[i].len)
    }
    return res
}

// 含有多个输成的   还未完成
function lisWithAllOutput(n) {
    if (n.length === 0) return 0
    // 创建一个和参数相同大小的数组，并填充值为 1
    let array = new Array(n.length)
    // 从索引 1 开始遍历，因为数组已经所有都填充为 1 了
    array[0] = {
        res: [],
        len: 1
    };
    for (let i = 1; i < n.length; i++) {
        // 从索引 0 遍历到 i
        // 判断索引 i 上的值是否大于之前的值
        array[i] = {
            res: [],
            len: 1
        };
        for (let j = 0; j < i; j++) {
            if (n[i] > n[j]) {
                array[i].len = Math.max(array[i].len, 1 + array[j].len)
                if (array[j].res.length === 0) {
                    array[j].res.push(n[j])
                }
                if (array[i].len <= 1 + array[j].len) {
                    // array[i][j] = array[j].res.concat(n[i])
                }
            }
        }
    }
    console.log(array)
    let res = 1
    for (let i = 0; i < array.length; i++) {
        res = Math.max(res, array[i].len)
    }
    return res
}

// console.log('find=====>', lis([0, 5, 12, 7, 3, 4, 17, 2, 8, 6, 10]))
console.log('find=====>', lisWithAllOutput([0, 12, 4, 17, 2, 8, 6, 10]))
// console.log('find=====>', lis([3, 4, 17, 2, 8, 6, 10]))
