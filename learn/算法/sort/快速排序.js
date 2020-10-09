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

// 既实现了排序，又符合快速排序的思想，为什么还会为人所诟病呢？原来是因为：
// 1、R取基数用的是splice()函数取，而不是算法中常用的取下标。基数只是一个参照对象，在比对的时候，只要能从数组中取到即可，所以只需要知道它的索引即可，调用函数删除基数只会更耗时；
// 2、根据基数来划分时，R专门生成两个数组来存储，从而占用了更多的存储空间（增加了空间复杂度）。
// 严格上讲，R的代码仅仅是用快速排序的思想实现了排序，也算是快速排序，但是还有很多改进之处。

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
