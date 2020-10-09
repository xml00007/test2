/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows <= 1) return s;
    if (numRows < 3) {
        const res = []
        let half = Math.floor(s.length / 2);
        for (let index = 0; index < s.length; index++) {
            if (index % 2 === 0) {
                res[half++] = s[index];
            } else {

            }

        }
    }
    const res = [];
    let i = 0, j = 0, lastRound = 0;
    for (let index = 0; index < s.length; index++) {
        const surplus = index % (numRows * 2 - 2);
        const round = Math.floor(index / (numRows * 2 - 2));
        if (round === lastRound) {
            if (surplus >= numRows) {
                i++;
                j--;
            } else {
                if (index > 0) {
                    j++
                }
            }
        } else {
            i++;
            j = 0;
            lastRound = round;
        }
        if (!res[i]) res[i] = [];
        res[i][j] = s[index];
    }

    return res[0].map(function (col, i) {
        return res.map(function (row) {
            return row[i];
        }).join('')
    }).join('');
};
// @lc code=end


// https://leetcode-cn.com/problems/zigzag-conversion/solution/ji-jian-jie-fa-by-ijzqardmbd/
var convert = function (s, numRows) {
    if (numRows === 1) return s;
    const rows = new Array(numRows).fill("");
    const n = 2 * numRows - 2;
    for (let i = 0; i < s.length; i++) {
        const x = i % n;
        rows[Math.min(x, n - x)] += s[i];
    }
    return rows.join("");
};

// https://leetcode-cn.com/problems/zigzag-conversion/solution/hua-jie-suan-fa-6-z-zi-xing-bian-huan-by-guanpengc/
var convert = function (s, numRows) {
    if (numRows == 1)
        return s;

    const len = Math.min(s.length, numRows);
    const rows = [];
    for (let i = 0; i < len; i++) rows[i] = "";
    let loc = 0;
    let down = false;

    for (const c of s) {
        rows[loc] += c;
        if (loc == 0 || loc == numRows - 1)
            down = !down;
        loc += down ? 1 : -1;
    }

    let ans = "";
    for (const row of rows) {
        ans += row;
    }
    return ans;
}

