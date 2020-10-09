// 移除元素


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 快慢指针~~ 来了来了
var removeElement = function (nums, val) {
    let fast = 0,
        slow = 0;
    while (fast < nums.length) {
        if (nums[fast] != val) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};

// 遍历判断 是否相等。  不相等则根据 下标 count 替换
var removeElement = function (nums, val) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[count] = nums[i]
            count++
        }
    }
    return count
};


// 作者：luoboo
// 链接：https://leetcode-cn.com/problems/remove-element/solution/yi-chu-yuan-su-jian-dan-yi-dong-by-luobo-3/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
