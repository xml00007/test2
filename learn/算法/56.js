// 合并区间


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    var sorted = intervals.sort((a, b) => a[0] - b[0]);
    console.log('sorted', sorted)
    var index = 0, res = [], fastIndex = 0, maxRight = 0;
    while (index < sorted.length) {
        maxRight = Math.max(maxRight, sorted[fastIndex][1])
        if (sorted[fastIndex + 1] && sorted[fastIndex + 1][0] <= maxRight) {
            fastIndex++;
        } else {
            res.push([sorted[index][0], maxRight]);
            index += (fastIndex - index + 1);
            fastIndex = index;
        }
    }
    return res
};


// merge([[1, 4], [4, 5]])
// merge([[1, 4], [2, 3]])
// merge([[1, 3], [2, 6], [8, 10], [15, 18]])
// merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]])
merge([[5, 5], [1, 3], [3, 5], [4, 6], [1, 1], [3, 3], [5, 6], [3, 3], [2, 4], [0, 0]])
