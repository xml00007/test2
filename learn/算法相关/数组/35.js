//  搜索插入位置

function findPos(nums, target) {
    let left = 0,
        right = nums.length,
        mid = 0;
    if (nums[0] >= target) return 0;
    if (nums[right] <= target) return right;

    while (left < right) {
        mid = (left + right) >> 1;
        if (nums[mid] < target) {
            left = mid;
        } else if (nums[mid] === target) {
            return mid
        } else {
            right = mid
        }
        if (right - left == 0) {
            return right
        }
        if (right - left == 1) {
            return left + 1
        }
    }
}
// console.log('findPos([1, 3, 5, 6], 4)==>', findPos([1, 3, 5, 6], 3));


var searchInsert = function (nums, target) {
    const n = nums.length;
    let left = 0,
        right = n - 1,
        ans = n;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};
console.log('findPos([1, 3, 5, 6], 4)==>', searchInsert([1, 3, 5, 6], 3));

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/search-insert-position/solution/sou-suo-cha-ru-wei-zhi-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
