// 删除数组中的重复项

function removeRepeat(nums) {
    let slowIndex = 0,
        fastIndex = 0,
        hash = {};
    while (fastIndex < nums.length) {
        const val = nums[fastIndex];
        if (!hash[val]) {
            hash[val] = true
            nums[slowIndex] = val;
            slowIndex++;
        }
        fastIndex++;
    }
    return slowIndex;
}

// 这个的基础是有序数组
var removeDuplicates = function (nums) {
    var j = 0;
    var n = nums.length;
    for (let i = 1; i < n; i++) {
        if (nums[i] != nums[i - 1]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
