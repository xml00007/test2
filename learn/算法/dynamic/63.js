/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const res = Array.from(new Array(m), () => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] > 0) {
                res[i][j] = 0
                continue;
            }
            if (i >= 1 && j >= 1) {
                res[i][j] = res[i - 1][j] + res[i][j - 1]
            } else if (i == 0) {
                res[i][j] = res[i][j - 1] === 0 ? 0 : 1;
            } else if (j == 0) {
                res[i][j] = res[i - 1][j] === 0 ? 0 : 1;
            }

        }
    }
    return res[m - 1][n - 1]
};

// console.log(uniquePathsWithObstacles([[0, 0], [1, 0]]));
console.log(uniquePathsWithObstacles([[1, 0]]));
