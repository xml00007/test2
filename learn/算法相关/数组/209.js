// 长度最小的子数组

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let leftIndex = 0,
        rightIndex = 0,
        sum = 0,
        minLength = 0;
    while (leftIndex < nums.length - 1) {
        if (sum >= s) {
            const currentLen = rightIndex - leftIndex;
            if (minLength === 0 || currentLen < minLength) minLength = currentLen;
            sum -= nums[leftIndex];
            leftIndex++;
        } else {
            if (rightIndex >= nums.length) return minLength
            sum += nums[rightIndex];
            rightIndex++;
        }
    }
    return minLength;
};


console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
