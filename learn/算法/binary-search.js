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

var searchInsert = function (nums, target) {
    const n = nums.length;
    let left = 0, right = n - 1, mid = 0, ans = n;
    while (left <= right) {
        // mid = ((right - left) >> 1) + left;
        mid = (right + left) >> 1;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/search-insert-position/solution/sou-suo-cha-ru-wei-zhi-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


// console.log(binarySearch([2, 4, 7, 9, 10, 12, 13, 16, 19, 29, 30, 43, 49, 50, 53, 67], 4));
// console.log(binarySearch([2, 4, 7, 9, 10, 12, 13, 16, 19, 29, 30, 43, 49, 50, 53, 67], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
