/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let count = m + n;
    while (m > 0 && n > 0) {
        nums1[--count] = nums1[m - 1] < nums2[n - 1] ? nums2[--n] : nums1[--m];
    }
    if (n > 0) {
        nums1.splice(0, n, ...nums2.slice(0, n));
    }
};

// 作者：Alexer - 660
// 链接：https://leetcode-cn.com/problems/merge-sorted-array/solution/88-he-bing-liang-ge-you-xu-shu-zu-by-alexer-660/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
