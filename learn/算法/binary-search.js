/*
    二分查找
    arr  数据源
    target  目标元素
*/

function binarySearch(arr, target) {
    let min = 0;  //最小下标
    let max = arr.length - 1;   //最大下标
    let mid = 0;  //中间下标
    while (min < max) {
        //没找到,更新范围继续找
        mid = Math.floor((min + max) / 2);
        if (arr[mid] > target) {   //number在mid的左边
            max = mid - 1;  //改变最大下标
        } else if (arr[mid] < target) {  //number在mid的右边
            min = mid + 1;  //改变最小下标
        } else {
            return mid;
        }
        if (max === min) {
            return max
        }
    }
    return -1;
}


console.log(binarySearch([2, 4, 7, 9, 10, 12, 13, 16, 19, 29, 30, 43, 49, 50, 53, 67], 4));
