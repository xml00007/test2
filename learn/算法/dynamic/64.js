/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const res = Array.from(new Array(m), () => new Array(n).fill(0));
    if (!isNaN(grid[0][0])) {
        res[0][0] = grid[0][0]
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i >= 1 && j >= 1) {
                res[i][j] = Math.min(res[i - 1][j], res[i][j - 1]) + grid[i][j];
            } else if (i == 0 && j >= 1) {
                res[i][j] = res[i][j - 1] + grid[i][j];
            }
            else if (j == 0 && i >= 1) {
                res[i][j] = res[i - 1][j] + grid[i][j];
            }
        }
    }
    return res[m - 1][n - 1]
};
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
