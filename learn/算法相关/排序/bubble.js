function bubble(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubble([1, 11, 23, 18, 6, 2, 3]))


function bubble2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubble2([1, 11, 23, 18, 6, 2, 3, 100, 23, 34, 15, 67, 32]))


// 传统快排
var quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};

// 改进后快排
let quickSort2 = (arr, begin, end) => {
    //递归出口
    if (begin >= end)
        return;
    var l = begin; // 左指针
    var r = end; //右指针
    var temp = arr[begin]; //基准数，这里取数组第一个数
    //左右指针相遇的时候退出扫描循环
    while (l < r) {
        //右指针从右向左扫描，碰到第一个小于基准数的时候停住
        while (l < r && arr[r] >= temp)
            r--;
        //左指针从左向右扫描，碰到第一个大于基准数的时候停住
        while (l < r && arr[l] <= temp)
            l++;
        //交换左右指针所停位置的数
        [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    //最后交换基准数与指针相遇位置的数
    [arr[begin], arr[l]] = [arr[l], arr[begin]];
    //递归处理左右数组
    quickSort2(arr, begin, l - 1);
    quickSort2(arr, l + 1, end);
};
console.log(quickSort2([1, 11, 23, 18, 6, 2, 3, 100, 23, 34, 15, 67, 32], 0, 13))


// 插入排序
function insertionSort(arr) {
    let len = arr.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && current < arr[preIndex]) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}

console.log(insertionSort([1, 11, 23, 18, 6, 2, 3, 100, 23, 34, 15, 67, 32]))

function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}

// 选择排序
// 选择排序的原理如下。遍历数组，设置最小值的索引为 0，如果取出的值比当前最小值小，就替换最小值索引，遍历完成后，将第一个元素和最小值索引上的值交换。如上操作后，第一个元素就是数组中的最小值，下次遍历就可以从索引 1 开始重复上述操作
function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            minIndex = array[j] < array[minIndex] ? j : minIndex;
        }
        swap(array, i, minIndex);
    }
    return array;
}
